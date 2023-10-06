import childrenStyle from "../Children.module.css";
import Dashboard from "../Dashboard/Dashboard";

export function InicioEstudiante() {
  return (
    <a className={childrenStyle.hu03MostrarRankingYHu05}>
      <div className={childrenStyle.hu03MostrarRankingYHu051}>
        <div className = {childrenStyle.conteinerTable}>
          <div className={childrenStyle.rankingEstudiantil}>
            Inicio
          </div>
        </div>
        <Dashboard />
      </div>
    </a>
  );
};

export default InicioEstudiante;