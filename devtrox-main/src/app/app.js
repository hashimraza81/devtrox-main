import "@fortawesome/fontawesome-svg-core/styles.css"; // Optionally import styles globally
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent Next.js from injecting inline styles

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
