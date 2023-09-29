import PensumFrame from "../components/PensumFrame";
import childrenStyle from "../Children.module.css";

export function AcademicGrades() {
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

export default AcademicGrades;