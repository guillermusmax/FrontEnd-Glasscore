import styles from './Ranking.module.scss'; // Importa tus estilos SCSS
import { Dropdown, Table, Progress, Tab } from 'semantic-ui-react';
import { TablaRanking } from '@/components/Layout/TablaRanking/TablaRanking';
import './Ranking.module.scss';

export function Ranking(){
    return (
      <div className={styles.pageContainer}>
      <h1 className={styles.pagetitle}>Ranking Estudiantil - 2023</h1>

      <div className={styles.filterRow}>
        <div className={styles.leftSection}>
          <div className={styles.filterContainer}>
            <span> Filtrado por:</span>
          </div>
          <div className={styles.selectContainer}>
            <Dropdown
              className={styles.filterSelect}
              placeholder="Seleccionar Carrera"
              fluid
              selection
              // Agrega aquí la lógica para manejar el cambio en la selección de carrera
            />
          </div>
        </div>
        <div className={styles.rightSection}>
          <Dropdown
            className={styles.selectiondropdownlevel}
            placeholder="Seleccionar Trimestre"
            fluid
            selection
          />
         </div>
      </div>

      <div className={styles.tableContainer}>
      <TablaRanking/>
      </div>
      
    </div>
    )
  }





/*
import RankingFrame from '../RankingFrame/RankingFrame';
import childrenStyle from '../Children.module.css'

export function Ranking() {
  return (
    <a className={childrenStyle.hu03MostrarRankingYHu05}>
      <div className={childrenStyle.hu03MostrarRankingYHu051}>
        <div className = {childrenStyle.conteinerTable}>
            <div className={childrenStyle.rankingEstudiantil}>
              Ranking estudiantil - 2023
          </div>
          <RankingFrame />
        </div>
      </div>
    </a>
  );
};

export default Ranking;
*/
  



