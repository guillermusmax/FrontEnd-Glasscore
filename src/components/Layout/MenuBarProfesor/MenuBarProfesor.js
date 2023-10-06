import Link from "next/link"
import { Icon, Menu , Button, Image} from 'semantic-ui-react'; 
import styles from './MenuBarProfesor.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi'; 

export function MenuBarProfesor({ menuVisible, setMenuVisible, onSelectOption  }) {
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    
      const [selectedOption, setSelectedOption] = useState(null);

      const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelectOption(option);
      };

    return (
        <div className={`${styles.sidebar} ${menuVisible ? '' : styles.collapsed}`}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <FiMenu />
      </button>
      {menuVisible && (
        <>
          <div className={styles.photoUser} onClick={() => handleOptionClick('')}>
            <Image src='/PhotoUser.PNG' alt='User_Photo' className={styles.photo}/>
          </div>
          <div className={styles.nameUser}>
            Carlos Montes
          </div>
          <div className={styles.typeUser}>
            Profesor
          </div>
          <div className={styles.menuItem} onClick={() => handleOptionClick('inicio')}>
          <div className={styles.itemWrapper}>
            <Icon name="users" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Inicio</span>
          </div>
          </div>

        <div className={styles.menuItem} onClick={() => handleOptionClick('calificacionesmedioterminoprofesor')}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Calificaciones medio término</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('calificacionfinalprofesor')}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Calificacion Final</span>
          </div>
        </div>

        <div className={styles.menuItem} onClick={() => handleOptionClick('rankingestudiante')}>
          <div className={styles.itemWrapper}>
            <Icon name="trophy" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Ranking</span>
          </div>
        </div>

        <div className={styles.logoutFooter}>
          <div className={styles.finalline}>
            <hr/>
          </div>
          <div className={styles.logout} >
            Cerrar sesión
          </div>
        </div>
        </>
      )}
      {!menuVisible && (
          <>
          <div className={styles.photoUserConteiner}>
            <Image src='/PhotoUser.PNG' alt='User_Photo'/>
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('inicio')}>
            <Icon name="book" />
            
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('calificaciones')}>
            <Icon name="star" />
            
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('ranking')}>
            <Icon name="trophy" />
            
          </div>
        </>
      )}
    </div>
    )
  }