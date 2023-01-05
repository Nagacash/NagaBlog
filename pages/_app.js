import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="m-4">
        <Nav />
        <Component {...pageProps} />;
      </div>
      <Footer />

    </>
  );
}

export default MyApp;
