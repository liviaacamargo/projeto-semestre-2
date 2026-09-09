"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.header}>
      <h2>🕷️ SPIDER-MAN</h2>

      <button
        className={styles.menuButton}
        onClick={() => setMenu(!menu)}
      >
        ☰
      </button>

      <nav className={menu ? styles.open : ""}>
        <Link href="/">Início</Link>
        <Link href="/filmes">Filmes</Link>
        <Link href="/personagens">Personagens</Link>
      </nav>
    </header>
  );
}