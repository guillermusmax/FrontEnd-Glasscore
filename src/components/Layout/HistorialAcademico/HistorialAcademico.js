import AcademicGradesFrame from "../AcademicGradesFrame/AcademicGradesFrame";
import childrenStyle from "../Children.module.css";

export function HistorialAcademico() {
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

export default HistorialAcademico;