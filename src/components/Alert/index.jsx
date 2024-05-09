import styles from "./Alert.module.css"

function Alert(props){
    const {children} = props

    return(
        <div className={styles.alert__jumlah}>
            <span>{children}</span>
        </div>
    )
}

export default Alert;