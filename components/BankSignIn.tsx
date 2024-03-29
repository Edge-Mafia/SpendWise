"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";
import DashboardDisplayPage from "./DashboardDisplayPage";
import { dataIter } from "@/transaction-sample.js";
import InitialHomePage from "./InitialHomePage";

axios.defaults.baseURL = "http://localhost:3000";

function PlaidAuth({ publicToken }: { publicToken: string }) {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [accessTokenRecieved, setAccessToken] = useState("");
  const [retry, setRetry] = useState(0);
  const [accountPassData, setAccountPassData] = useState();

  useEffect(() => {
    async function fetchData() {
      let accessToken = await axios.post("/api/plaid/exchange_public_token", { public_token: publicToken });
      console.log("accessToken", accessToken.data);
      setAccessToken(accessToken.data.accessToken);
      // setAccessToken("access-sandbox-33dd89dd-5e66-496c-b6e4-f3fed9dad081");
      console.log("access Token in fetchData() ", accessTokenRecieved, " - -- - ");

      const auth = await axios.post("/api/plaid/auth", {
        access_token: accessToken.data.accessToken,
      });
      console.log("auth data ", auth.data);
      setAccount(auth.data.numbers.ach[0]);
      setBalance(auth.data.accounts[0].balances.current);
      setAccountPassData(auth.data.accounts);
    }
    if (!(accessTokenRecieved.length)) {
      console.log(accessTokenRecieved.length);

      fetchData();
    }
  }, [publicToken]);

  useEffect(() => {
    async function fetchTransactions() {
      const startDate = "2023-01-01";
      const endDate = "2023-01-11";
      // @ts-ignore
      // console.log("Data being sent: ",accessTokenRecieved, startDate, endDate)
      // const response = await axios.post("/api/plaid/fetch_transactions", {
      //   // @ts-ignore
      //   access_token: accessTokenRecieved,
      //   start_date: startDate,
      //   end_date: endDate,
      // });
      // console.log("Response: ", response);

      // console.log("Transactions: ", response.data);
      console.log("fetching with access token: ", accessTokenRecieved);

      fetch("http://localhost:3000/api/plaid/fetch_transactions", {
        method: "POST", headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token: accessTokenRecieved,
          start_date: startDate,
          end_date: endDate,
        })
      }).then(res => {
        console.log(res);
        if (res.status != 200) {
          console.log(`Try: ${retry}`);
          if (retry < 3) {
            setRetry(retry + 1);
            fetchTransactions();
          }
        }
        else {
          return res.json();
        }

      }).then(data => {
        console.log("🚀 data:", data)
        
      }).catch(err => {

      })
    }
    if (accessTokenRecieved && accessTokenRecieved.length) {
      setTimeout(() => {
        fetchTransactions();
      }, 3000);
    }
  }, [accessTokenRecieved]);

  return (
    account && (
      <>
      {/* @ts-ignore */}
        <DashboardDisplayPage account={accountPassData} data={dataIter} />
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

  return (
    <div className=" flex flex-col items-center text-white">
      {publicToken ? (
        <PlaidAuth publicToken={publicToken} />
      ) : (
        // <button onClick={() => open()} disabled={!ready}>
        //   Connect a bank account
        // </button>
        <InitialHomePage openOp={open} readyOp={ready} />
      )}</div>)
}
