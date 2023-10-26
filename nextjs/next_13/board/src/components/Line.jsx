import styles from '../styles/Line.module.css'
import SubDivision from "./SubDivision";

export default function Line(props) {
    return (
        <div className={styles.line}>
            <SubDivision black={props.black} />
            <SubDivision black={!props.black} />
            <SubDivision black={props.black} />
            <SubDivision black={!props.black} />
            <SubDivision black={props.black} />
            <SubDivision black={!props.black} />
            <SubDivision black={props.black} />
            <SubDivision black={!props.black} /> 
        </div>
    )
}