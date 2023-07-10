import Cabecalho from "../Components/Cabecalho";
import Galeria from "../Components/Galeria";
import Menu from "../Components/Menu";
import Populares from "../Components/Populares";
import Rodape from "../Components/Rodape";
import banner from "../PaginaInicial/banner.png"
import styles from '../PaginaInicial/PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço!</h1>
                        <img src={banner} alt="Imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
            <div  className={styles.galeria}>
                <Galeria/>
                <Populares />
            </div>
            
            <Rodape />
        </>
    )
}