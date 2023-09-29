import childrenStyle from "../Children.module.css";
import Dashboard from "../components/Dashboard";

export function Inicio() {
  return (
    <a className={childrenStyle.hu03MostrarRankingYHu05}>
      <div className={childrenStyle.hu03MostrarRankingYHu051}>
        <Dashboard />
      </div>
    </a>
  );
};

export default Inicio;