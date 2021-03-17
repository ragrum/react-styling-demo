import styles from "../styles/Module.module.css";

export default function Module() {
  return (
    <div className={styles.container}>
      <div className={styles.square}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
