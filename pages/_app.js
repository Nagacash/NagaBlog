import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="m-4 text-center">
        <Nav />
        <h1 className="p-5">Let's talk fashion, knowledge, and music! Our blog is your go-to for the latest style tips, the smartest insights, and the hottest tracks. Get ready to stay ahead of the game with us.</h1>
        <div className="">
        <Component {...pageProps} />;
        </div>
      </div>

      

      <Footer />

    </>
  );
}

export default MyApp;
