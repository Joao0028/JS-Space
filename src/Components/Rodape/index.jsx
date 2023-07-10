import styles from '../Rodape/Rodape.module.scss';
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'


export default function Rodape(){
    return(

        <footer className={styles.container}>
            <ul>
                <li><a href="https://github.com/Joao0028"><BsFacebook/></a></li>
                <li><a href="https://github.com/Joao0028"><BsTwitter/></a></li>
                <li><a href="https://github.com/Joao0028"><BsInstagram/></a></li>
            </ul>

            <a href="https://github.com/Joao0028" className={styles.fraseFim}>&copy;Desenvolvido por João Paulo</a>
        </footer>

    )
}