import styles from './Header.module.css'

export default function Header(){
    return(
        <>
            <div className={styles.header}>
                <h2>Preencha o formulário para fazer seu Mapa</h2>
                <p>Ficamos muito felizes com a sua compra, utilize o formulário abaixo para desenvolver seu Mapa
                </p>
            </div>
        </>
    )
}