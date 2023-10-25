import styles from './integration2.module.css'

export default function integration2() {
    return (
        <div id={styles.integration2}>
            <div className={styles.red}>Text #01</div>
            <div className={styles.white}>Text #02</div>
            <div className={styles.blue}>Text #03</div>
        </div>
    )
}