import styles from "./Home.module.css"

//Images
import sectionImg1 from "../../assets/images/SectionImage.png"

function Home(){
    return (
    <div className={styles.container}>
        <div className={styles.containerHeader}>
            <div className={styles.header}>
                <div className={styles.contentHeader}>
                    <h1 className={styles.titleHeader}>IMAGINE UM LUGAR...</h1>

                    <p>…onde você possa pertencer a um clube escolar, um grupo de gamers, 
                        ou uma comunidade artística mundial. Onde você e alguns amigos possam 
                        passar um tempo juntos. Um lugar que torna fácil conversar todos os dias
                        e socializar com mais frequência.
                    </p>

                    <button className={styles.buttonStyleWhite}>Baixar para Windows</button>
                    <button className={styles.buttonStyleBlack} >Abra o Discord no seu navegador</button>
                </div>
            </div>
        </div>
        <div className={styles.section1}>
            <img src={sectionImg1}/>
            <h2>Crie um espaço controlado por convite onde você se sinta em casa</h2>
            <p>Os servidores Discord são organizados em canais com assuntos para
                 vocês colaborarem, compartilharem ou simplesmente falarem do dia 
                 sem entupir um chat geral.</p>
        </div>
        </div>
    )   
}

export default Home;