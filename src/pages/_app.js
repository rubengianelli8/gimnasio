import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import "src/assets/fonts/fonts.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
