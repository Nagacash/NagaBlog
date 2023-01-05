import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="m-4 text-center">
        <Nav />
        <h1 className="p-5 text1">Let's talk fashion, knowledge, and music! </h1><br></br><br></br><h2>Our blog is your go-to for the latest style tips, the smartest insights, and the hottest tracks. Get ready to stay ahead of the game with us.</h2>
        <div className="">
          <Component {...pageProps} />;
        </div>
      </div>

      <br></br>
      <h1 className="p-5 text1   text-center">"Unlock the Mystical Sounds of the Naga:<br></br> A Shortlord Productions.  
      <br></br> <br></br>
      <div className="text-warning text-small">- NAGA Sampler Vol. 1" -</div>
      <br></br>
        <div className="text-center">
          Stream It Now on Spotify"!
        </div>
      </h1>

      <br></br><br></br>
      <Hero />
      <br></br><br></br><br></br>
      <Footer />

    </>
  );
}

export default MyApp;
