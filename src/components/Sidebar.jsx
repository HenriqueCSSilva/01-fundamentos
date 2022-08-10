import styles from './Sidebar.module.css';
import covrImage from '../assets/cover.png';
import profileImage from '../assets/perfil.png'
import {PencilLine} from 'phosphor-react'
//Minah Sidebar
export function Sidebar(){

    return(
        <asside className={styles.sidebar}>
            <img className={styles.cover} 
            src={covrImage} />

            <div className={styles.profile} >
            <img className={styles.avatar} src={profileImage} />
                <strong>Marcos Henrique</strong>
                <span>Web Developor</span>
            </div>

            <footer>
          
            <a href="#">
            <PencilLine
                size={20}
            />
            Editar seu perfil</a>
            </footer>



        </asside>


    )
}