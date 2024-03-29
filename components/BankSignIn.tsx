"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";

axios.defaults.baseURL = "http://localhost:3000";

function PlaidAuth({ publicToken }: { publicToken: string }) {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
 const [accessTokenRecieved, setAccessToken] = useState();

  useEffect(() => {
    async function fetchData() {
      let accessToken = await axios.post("/api/plaid/exchange_public_token", { public_token: publicToken });
      console.log("accessToken", accessToken.data);
      setAccessToken(accessToken.data.accessToken);
      const auth = await axios.post("/api/plaid/auth", {
        access_token: accessToken.data.accessToken,
      });
      console.log("auth data ", auth.data);
      setAccount(auth.data.numbers.ach[0]);
      setBalance(auth.data.accounts[0].balances.current);
    }
    fetchData();
  }, [publicToken]);

  useEffect(() => {
    async function fetchTransactions() {
      const startDate = "2023-01-01";
      const endDate = "2023-01-11";
      // @ts-ignore
      // console.log("Data being sent: ",accessTokenRecieved, startDate, endDate)
      const response = await axios.post("/api/plaid/fetch_transactions", {
        // @ts-ignore
        access_token: accessTokenRecieved,
        start_date: startDate,
        end_date: endDate,
      });

      console.log("Transactions: ", response.data);
    }
    if (accessTokenRecieved) {
      fetchTransactions();
    }
  }, [accessTokenRecieved]);

  return (
    account && (
      <>
        <p>Account balance: {balance}</p>
      </>
    )
  );
}

export default function BankSignIn() {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    async function fetch() {
      const response = await axios.post(
        "/api/plaid/create_link_token"
      );
      setLinkToken(response.data.link_token);
    }
    fetch();
  }, []);

  // @ts-ignore
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      // @ts-ignore
      setPublicToken(public_token);
      console.log("success", public_token, metadata);
    },
  });

  return publicToken ? (
    <PlaidAuth publicToken={publicToken} />
  ) : (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
}
