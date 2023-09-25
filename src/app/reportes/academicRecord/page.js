import Head from "next/head";
import AcademicGradesFrame from "../../components/AcademicGradesFrame";
import styles from "../../ranking/Ranking.module.css";
import childrenStyle from "../../Children.module.css";

export function AcademicGrades() {
  return (
    <a className={childrenStyle.hu03MostrarRankingYHu05}>
      <div className={childrenStyle.hu03MostrarRankingYHu051}>
        <div className = {childrenStyle.conteinerTable}>
          <div className={childrenStyle.rankingEstudiantil}>
            Historial Academico
          </div>
        </div>
        <AcademicGradesFrame />
        <AcademicGradesFrame />
        <AcademicGradesFrame />
        <AcademicGradesFrame />
        <AcademicGradesFrame />
      </div>
    </a>
  );
};

export default AcademicGrades;