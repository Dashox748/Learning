import Link from "next/link";
import classes from "./page.module.css";
function Header() {
  return (
    <div className={classes.header__container}>
      <Link href="/" className={classes.header__container_home_button}>
        Home
      </Link>
      <Link href="/search" className={classes.header__container_home_button}>
        Search
      </Link>
      <Link href="/todos" className={classes.header__container_home_button}>
        Todos
      </Link>
    </div>
  );
}

export default Header;
