import Link from 'next/link'
import styles from '../styles/Button.module.css'

interface ButtonProps {
    href?: string
    text: string
    onclick?: (e: any) => void
}   

const Button = (props: ButtonProps) => {

    const renderButton = () => {
        return (
            <button className={styles.button}
                onClick={props.onclick}>
                {props.text}
            </button>
        )
    }
    
  return props.href ? (
       <Link href={props.href}>
            {renderButton()}
       </Link>
  ) : renderButton()
}

export default Button