import styles from "./page.module.css";

export default function Personagens() {
  return (
    <main className={styles.main}>
      <h1>Personagens</h1>

      <div className={styles.card}>
        <h2>Peter Parker</h2>
        <p>O Homem-Aranha, interpretado por Tom Holland.</p>
      </div>

      <div className={styles.card}>
        <h2>MJ</h2>
        <p>Namorada de Peter Parker.</p>
      </div>

      <div className={styles.card}>
        <h2>Ned Leeds</h2>
        <p>Melhor amigo de Peter Parker.</p>
      </div>

      <div className={styles.card}>
        <h2>Tony Stark</h2>
        <p>Mentor de Peter Parker.</p>
      </div>
    </main>
  );
}