import styles from "./Hero.module.css"
import img from "../../assets/img/img1.png"

function Hero() {
  return(
    <div className={styles.container}>
      <section className={styles.hero}> 
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <p className={styles.hero__tagline}>Monitoring Perkembangan Covid</p>
          <br />
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quod modi et ea quos perspiciatis laudantium, numquam, adipisci vitae nam provident molestias tempora, consequatur deleniti hic. Saepe illum, accusamus obcaecati beatae illo iure quaerat numquam.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img
          className={styles.hero__image} 
          src={img} 
          alt="pict" />
        </div>
      </section>
    </div>
  )
}

export default Hero;
