import styles from '../styles/Response.module.css'
import ResponseModel from "@/model/response"

interface ResponseProps {
    value: ResponseModel
    indice: number
    letter: string
    colorBackgroundLetter: string
    responseProvided: (indice: number) => void
}

const Response = (props: ResponseProps) => {
    const response = props.value
  return (
    <div className={styles.response} 
    onClick={() => props.responseProvided(props.indice)}>
        <div className={styles.contentResponse}>
            {!response.reveled ? (
                <div className={styles.front}>
                <div className={styles.letter}
                style={{backgroundColor: props.colorBackgroundLetter }}>
                    {props.letter}
                </div>
                <div className={styles.value}>
                    {response.value}
                </div>
            </div>
            ): (
        <div className={styles.verse}>
                {response.certain ? (
                <div className={styles.certain}>
                    <div>The right answer is...</div>
                    <div className={styles.value}>{response.value}</div>
                </div>
                ) : (
                <div className={styles.wrong}>
                    <div>The right answer is wrong...</div>
                    <div className={styles.value}>{response.value}</div>
                </div>
                )}
            </div>
            )}
            
            
        </div>
    </div>
  )
}

export default Response