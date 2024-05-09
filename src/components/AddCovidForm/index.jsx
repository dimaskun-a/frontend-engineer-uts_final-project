import styles from "./AddCovidForm.module.css"
import img from "../../assets/img/img2.svg"
import { useState } from 'react';
import Alert from "../Alert";

function AddCovidForm(props) {
    const { provinces, setProvinces } = props;

    
    if (!provinces || provinces.length === 0) {
        return null; 
    }

    const [provinsi, setProvinsi] = useState("jakarta");
    const [status, setStatus] = useState("kasus");
    const [jumlah, setJumlah] = useState("");
    const [isJumlahError, setIsJumlahError] = useState(false);

    function updateProvinces() {
        const index = provinces.findIndex((item) => item.kota === provinsi);
        const foundProvinces = provinces.find((item) => item.kota === provinsi);

        
        if (index !== -1) {
            provinces[index] = {
                ...foundProvince,
                [status]: parseInt(foundProvince[status]) + parseInt(jumlah),
            }
            
            setProvinces([...provinces]);
        }
        setIsJumlahError(false);
    }

    function handleProvinsi(e) {
        setProvinsi(e.target.value);
    }

    function handleStatus(e) {
        setStatus(e.target.value);
    }

    function handleJumlah(e) {
        setJumlah(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (jumlah === "") {
            setIsJumlahError(true);
        } else {
            updateProvinces();
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src={img} alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Form Covid</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Provinsi</label>
                            <select name="provinsi" id="" className={styles.form__select} value={provinsi} onChange={handleProvinsi}>
                                
                                {provinces.map((kota) => (
                                    <option key={kota.kota} value={kota.kota}>{kota.kota}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>status</label>
                            <select name="status" id="" className={styles.form__select} value={status} onChange={handleStatus}>
                                <option value="kasus">positif</option>
                                <option value="sembuh">sembuh</option>
                                <option value="dirawat">dirawat</option>
                                <option value="meninggal">meninggal</option>
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>jumlah</label>
                            <input name="jumlah" type="number" className={styles.form__input} min="0" value={jumlah} onChange={handleJumlah} />
                            {isJumlahError && <Alert>jumlah wajib dimasukan</Alert>}
                        </div>
                        <div>
                            <button type="submit" className={styles.form__button}>submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddCovidForm;
