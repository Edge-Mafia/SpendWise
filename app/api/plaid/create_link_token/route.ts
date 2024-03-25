import { getPlaidClient } from "@/lib/plaidClient";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const plaidClient = getPlaidClient();
    const plaidRequest = {
      user: {
        client_user_id: 'user',
      },
      client_name: 'Plaid Test App',
      products: ['auth'],
      language: 'en',
      redirect_uri: 'http://localhost:3000/',
      country_codes: ['US'],
    };
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
    return NextResponse.json(createTokenResponse.data)
  } catch (error) {
    console.log(error)
  }
}