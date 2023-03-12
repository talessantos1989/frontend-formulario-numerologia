import styles from "./Thanks.module.css";

export default function Thanks({ data }) {
  const nameSplit = data.name.split(" ").slice(0, 1).join(" ");
  return (
    <div>
      <div className={styles.thanksHeader}>
        <h1>Obrigado, {nameSplit}</h1>
      </div>
      <div className={styles.thanksParagraph}>
        <p>
          Em um prazo máximo de{" "}
          <em>
            <strong>7 dias úteis</strong>
          </em>{" "}
          seu mapa será entregue no e-mail informado:{" "}
          <strong>{data.email}</strong>
        </p>
      </div>
      <div className={styles.thanksParagraph}>
        <p>
          Atente-se na caixa de{" "}
          <em>
            <strong>SPAN</strong>
          </em>
          . Seu mapa pode cair no <strong>SPAN</strong>, na aba de{" "}
          <strong>Promoções</strong> ou aba <strong>Social</strong>
        </p>
      </div>
      <div className={styles.thanksParagraph}>
        <p>Fique atenta (o) !!</p>
      </div>
    </div>
  );
}
