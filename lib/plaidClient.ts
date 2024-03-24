import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

export const getPlaidClient = () => {
    // @ts-ignore
    if (!global.plaidClient) {
        const configuration = new Configuration({
            basePath: PlaidEnvironments.sandbox,
            baseOptions: {
              headers: {
                "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
                "PLAID-SECRET": process.env.PLAID_CLIENT_SECRET,
              },
            },
          });
          // @ts-ignore
          global.plaidClient = new PlaidApi(configuration);
    }
    // @ts-ignore
    return global.plaidClient;
}