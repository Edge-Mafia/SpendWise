import { getPlaidClient } from "@/lib/plaidClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { access_token, start_date, end_date } = await request.json();
    // console.log(access_token, start_date, end_date);
    if (!access_token || !start_date || !end_date) {
        return new Response(JSON.stringify({ message: "Access token, start date, and end date are required" }), {
            status: 400,
        });
    }

    try {
        const plaidClient = getPlaidClient();
        const transactionsResponse = await plaidClient.transactionsGet({
            access_token,
            start_date,
            end_date,
        });
        return NextResponse.json(transactionsResponse.data);
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ message: error.message }, { status: 500 });
    }
}