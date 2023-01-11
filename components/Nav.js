import Link from "next/link";

function Nav() {
  return (
    <nav>
      {/* <Link href="/">Our Digital Showroom</Link> */}
      <a href="/" >
      <img src="../favicon.ico/" className="logos"/>
      </a>
    </nav>
  );
}

export default Nav;