import styles from './Cursor.module.css'

const Cursor = ({shape, isBlinking}) => {
    let className = `${styles[shape]} ${styles.inline}` ;
    if(isBlinking){
        className = className + ` ${styles.blink}`
    }
    return (
        <div className={className}></div>
    )
}

export default Cursor;