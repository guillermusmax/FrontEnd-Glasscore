import PensumFrame from "../PensumFrame/PensumFrame";
import childrenStyle from "../Children.module.css";

export function Pensum() {
  return (
    <a className={childrenStyle.hu03MostrarRankingYHu05}>
      <div className={childrenStyle.hu03MostrarRankingYHu051}>
        <div className = {childrenStyle.conteinerTable}>
          <div className={childrenStyle.rankingEstudiantil}>
            Pensum
          </div>
        </div>
        <PensumFrame />
        <PensumFrame />
        <PensumFrame />
      </div>
    </a>
  );
};

export default Pensum;
