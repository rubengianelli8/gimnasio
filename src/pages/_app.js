import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "tailwindcss/tailwind.css";
import "src/assets/fonts/fonts.css";
import "@/assets/css/global-styles.css";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {},
  },
});
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL + "/api/graphql",
  cache,
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Head>
          <title>Gimnasio Demo</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
