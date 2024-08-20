import styles from "./Home.module.css";

//Images
import sectionImg1 from "../../assets/images/SectionImage.png";
import sectionImg2 from "../../assets/images/SectionImage2.png";
import sectionImg3 from "../../assets/images/Section2Img1.png";
import footerImg from "../../assets/images/discord-logo.png";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.header}>
          <div className={styles.contentHeader}>
            <div>
              <h1 className={styles.titleHeader}>IMAGINE UM LUGAR...</h1>

              <p>
                …onde você possa pertencer a um clube escolar, um grupo de
                gamers, ou uma comunidade artística mundial. Onde você e alguns
                amigos possam passar um tempo juntos. Um lugar que torna fácil
                conversar todos os dias e socializar com mais frequência.
              </p>
            </div>
            <div className={styles.containerbuttons}>
              <button className={styles.buttonStyleWhite}>
                Baixar para Windows
              </button>
              <button className={styles.buttonStyleBlack}>
                Abra o Discord no seu navegador
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <img src={sectionImg1} />
          <div className={styles.containerSection}>
            <h2 className={styles.titleSection}>
              Crie um espaço controlado por convite onde você se sinta em casa
            </h2>
            <p>
              Os servidores Discord são organizados em canais com assuntos para
              vocês colaborarem, compartilharem ou simplesmente falarem do dia
              sem entupir um chat geral.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <img src={sectionImg2} />
          <div className={styles.containerSection}>
            <h2 className={styles.titleSection}>Para poucos e para muitos</h2>
            <p>
              Organize qualquer comunidade com ferramentas de moderação e acesso
              personalizado a membros. Dê poderes especiais aos membros, monte
              canais privados e muito mais.
            </p>
          </div>
        </div>

        <div className={styles.sectionLeft}>
          <div className={styles.containerSectionLeft}>
            {" "}
            <h2 className={styles.titleSection}>Para poucos e para muitos</h2>
            <p>
              Organize qualquer comunidade com ferramentas de moderação e acesso
              personalizado a membros. Dê poderes especiais aos membros, monte
              canais privados e muito mais.
            </p>
          </div>
          <img src={sectionImg2} />
        </div>
        <div className={styles.section}>
          <img src={sectionImg1} />
          <div className={styles.containerSection}>
            <h2 className={styles.titleSection}>
              Crie um espaço controlado por convite onde você se sinta em casa
            </h2>
            <p>
              Os servidores Discord são organizados em canais com assuntos para
              vocês colaborarem, compartilharem ou simplesmente falarem do dia
              sem entupir um chat geral.
            </p>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.content}>
            <div className={styles.container}>
              <h2>TECNOLOGIA DE CONEXÃO CONFIÁVEL</h2>
              <p>
                Voz e vídeo de baixa latência, para você conversar como se
                estivesse na mesma sala. Dê um joinha por vídeo, veja amigos
                transmitirem a jogatina do dia ou junte uma galera pra desenhar
                na tela compartilhada.
              </p>
            </div>
            <img src={sectionImg3} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <img src={footerImg} />
      </div>
    </div>
  );
}

export default Home;
