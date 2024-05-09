import styles from './GlobalCard.module.css'

function GlobalCard(props){
    console.log(props.style);
    console.log(props.card);
    //destruct object
    const {card,style} = props;

    return(
        <div className={styles.card}>
            <div className={styles.card__detail}>
                <h2 className={styles.card__title}>{card.status}</h2>
                <h1 className={styles[style]}>{card.total}</h1>
                <a href={card.detail} className={styles.card__detail}>More Info</a>
            </div>
        </div>
    )
}

export default GlobalCard;