import styles from "./page.module.css";

export default function Filmes() {
  return (
    <main className={styles.main}>
      <h1>Filmes</h1>

      <div className={styles.card}>
        <h2>Homem-Aranha: De Volta ao Lar</h2>
        <p>2017</p>
      </div>

      <div className={styles.card}>
        <h2>Homem-Aranha: Longe de Casa</h2>
        <p>2019</p>
      </div>

      <div className={styles.card}>
        <h2>Homem-Aranha: Sem Volta para Casa</h2>
        <p>2021</p>
      </div>
    </main>
  );
}