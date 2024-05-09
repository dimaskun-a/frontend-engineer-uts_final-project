import GlobalCard from "../GlobalCard/index";
import styles from "./Global.module.css"
import data from '../../utils/constants/indonesia'

function Global(){
    //membuat variable provinsi
    const {indonesia} = data;
    const stats = ["positif","sembuh","meninggal"]

    return(
        <div className={styles.container}>
            <section className={styles.global}>
                <h2 className={styles.global__title}>Indonesia</h2>
                <p className={styles.global__tagline}>Data Covid Berdasarkan Global</p>
                <div className={styles.card__container}>
                    {
                        indonesia.map((status,index) => {
                            return <GlobalCard  card={status} style={stats[index]}/>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Global;