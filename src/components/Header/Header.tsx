import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../../public/logo.svg";
import Search from "../../../public/search.svg";

import styles from "./styles/Header.module.scss";

export const Header = () => {
  const { pathname } = useRouter();
  const menu = [
    { title: "Pokemons", path: "/" },
    { title: "Berrys", path: "/berrys" },
    { title: "Items", path: "/items" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <Image src={Logo} alt="Logo" />
        <form className={styles.form}>
          <label htmlFor="search">
            <input type="text" placeholder="Pokemon" />
            <button type="submit">
              <Image src={Search} alt="Pesquisar" />
            </button>
          </label>
        </form>
        <nav className={styles.navigation}>
          <ul>
            {menu.map(({ title, path }, index) => (
              <li
                key={index}
                style={
                  pathname === path
                    ? { borderBottom: "2px solid var(--white)" }
                    : {}
                }
              >
                <Link href={path}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
