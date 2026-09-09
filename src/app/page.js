import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <p className={styles.small}>MARVEL • SPIDER-MAN</p>

        <h1>
          Homem-Aranha
          <span>Tom Holland</span>
        </h1>

        <p className={styles.text}>
          Conheça a história do Homem-Aranha interpretado por Tom Holland
          no Universo Cinematográfico da Marvel.
        </p>

        <Link href="/filmes" className={styles.button}>
          Conhecer os filmes
        </Link>
      </section>

      <div className={styles.spider}>🕷️</div>
    </main>
  );
}