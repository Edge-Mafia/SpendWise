import { getPlaidClient } from "@/lib/plaidClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { access_token } = await req.json();
    if (!access_token) {
        return new Response(JSON.stringify({ message: 'Access token is required' }), { status: 400 });
    }

    try {
        const plaidClient = getPlaidClient();
        const authResponse = await plaidClient.authGet({ access_token });
        return NextResponse.json(authResponse.data);
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ message: error.message }, { status: 500 });
    }

}