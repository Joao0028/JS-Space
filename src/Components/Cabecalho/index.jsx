import styles from '../Cabecalho/Cabecalho.module.scss'
import logo from '../Cabecalho/logo.png'
import lupa from '../Cabecalho/search.png'

export default function Cabecalho(){
    return(
        <header className={styles.container}>
            <div className={styles.logo}><img src={logo} alt="Logo do JS Space" /><h2> JS Space</h2></div>
        <div className={styles.container__pesquisa}>
            <input
            type="text" 
            placeholder="O que você procura?"
            />
            <img src={lupa} alt="Icone da Lupa" />
            
        </div>
        </header>
    )
}