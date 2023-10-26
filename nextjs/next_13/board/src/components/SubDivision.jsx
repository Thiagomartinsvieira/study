import styles from '../styles/SubDivision.module.css'

export default function SubDivision(props) {
    return (
        <div
        style={{backgroundColor: props.black ? '#000' : '#fff'}}
        className={styles.subDivision}>

        </div>
    )
}