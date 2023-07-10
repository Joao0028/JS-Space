import styles from "../Menu/Menu.module.scss"
import inicio from "../Menu/icones/home-ativo.png"
import maisVistas from "../Menu/icones/mais-vistas-inativo.png"
import maisCurtidas from "../Menu/icones/mais-curtidas-inativo.png"
import Novas from "../Menu/icones/novas-inativo.png"
import SurpreendaMe from "../Menu/icones/surpreenda-me-inativo.png"

export default function Menu(){
    return(
            <nav className={styles.menu}>
                <ul className={styles.menu__lista}>
                    <li className={styles.menu__item}>
                        <img src={inicio} alt="Logo de inicio" /> 
                        <a href="#SemRedirecionamento">Início</a>
                    </li>

                    <li className={styles.menu__item}>
                        <img src={maisVistas} alt="Logo de mais vistos" /> 
                        <a href="#SemRedirecionamento">Mais vistas</a>
                    </li>

                    <li className={styles.menu__item}>
                        <img src={maisCurtidas} alt="Logo de mais curtidos" /> 
                        <a href="#SemRedirecionamento">Mais curtidas</a>
                    </li>

                    <li className={styles.menu__item}>
                        <img src={Novas} alt="Logo de novas imagens" /> 
                        <a href="#SemRedirecionamento">Novas</a>
                    </li>

                    <li className={styles.menu__item}>
                        <img src={SurpreendaMe} alt="Logo de lâmpada de surpreenda-se" /> 
                        <a href="#SemRedirecionamento">Surpreenda-me</a>
                    </li>
                </ul>
            </nav>
    )
}