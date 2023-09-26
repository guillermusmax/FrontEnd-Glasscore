import RankingFrame from "../components/RankingFrame";
import childrenStyle from "../Children.module.css";

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