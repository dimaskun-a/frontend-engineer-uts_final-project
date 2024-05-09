import styles from './Provinsi.module.css'

function TablePovinsi(props){

    const {kota,no} = props;

    return(
        <tbody className={styles.table__body}>
                <tr className={styles.table__row}>
                    <td className={styles.td}>{no}</td>
                    <td className={styles.td}>{kota.kota}</td>
                    <td className={styles.td}>{kota.kasus}</td>
                    <td className={styles.td}>{kota.sembuh}</td>
                    <td className={styles.td}>{kota.dirawat}</td>
                    <td className={styles.td}>{kota.meninggal}</td>
                </tr>
        </tbody>

    )
}

export default TablePovinsi;