import TablePovinsi from "../TableProvinsi";
import styles from "./Provinsi.module.css"

function Provinsi(props){

    const {provinces} = props;
    let angka ='';
    
    return(
        <div className={styles.container}>
            <section className={styles.provinsi}>
                <h2 className={styles.provinsi__title}>Provinsi</h2>
                <p className={styles.provinsi__tagline}>Data Covid Berdasarkan Provinsi</p>
                <div className={styles.table__container}>
                    <table className={styles.table}>
                        <thead className={styles.table__head}>
                            <tr className={styles.table__row}>
                                <th className={styles.th}>No</th>
                                <th className={styles.th}>Provinsi</th>
                                <th className={styles.th}>Positif</th>
                                <th className={styles.th}>Sembuh</th>
                                <th className={styles.th}>Dirawat</th>
                                <th className={styles.th}>Meninggal</th>
                            </tr>
                        </thead>
                        {provinces.map((kota)=>{
                            angka++
                            return <TablePovinsi kota={kota} no={angka} />
                        })}
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Provinsi;