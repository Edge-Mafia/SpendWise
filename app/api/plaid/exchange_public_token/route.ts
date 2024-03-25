import { getPlaidClient } from "@/lib/plaidClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { public_token } = await request.json(); 
    if (!public_token) {
        return new Response(JSON.stringify({ message: "Public Token not valid" }), {
            status: 200,
          })
    }

    try {
        const plaidClient = getPlaidClient();
        const exchangeResponse = await plaidClient.itemPublicTokenExchange({ public_token });
        const accessToken = exchangeResponse.data.access_token

        return NextResponse.json({ accessToken });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ message: error.message}, { status: 500})
    }
}