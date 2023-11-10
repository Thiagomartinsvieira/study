import styles from '../styles/NumericEntry.module.css'

interface NumericEntryProps {
    text: string
    value: number
    onchange: (newValue: number) => void
}

const NumericEntry = (props: NumericEntryProps) => {
    const dec = () => props.onchange(props.value -1)
    const inc = () => props.onchange(props.value +1)

  return (
    <div className={styles.numericEntry}>
        <span className={styles.text}>{props.text}</span>
        <span className={styles.value}>{props.value}</span>
        <div className={styles.buttons}>
            <button className={styles.btn} onClick={dec}>-</button>
            <button className={styles.btn} onClick={inc}>+</button>
        </div>
    </div>
  )
}

export default NumericEntry