import styles from "./RankingPerson.module.css";
import { useState } from "./useClient/ReactClient";

const RankingPerson = ({
  propPosition,
  estudianteFullName,
  estudianteCarrera,
  estudianteTrimestre,
  estudianteMaterias,
  estudianteIndice,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frame}>
        <div className={styles.frame1} />
        <div className={styles.frame1}>
          <div className={styles.div}>{propPosition}</div>
          <div className={styles.carrera}>{estudianteCarrera}</div>
          <div className={styles.fullName}>{estudianteFullName}</div>
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.frame4} />
        <div className={styles.frame4}>
          <div className={styles.div1}>{estudianteTrimestre}</div>
          <div className={styles.groupParent}>
            <div className={styles.div2}>{estudianteIndice}</div>
          </div>
          <div className={styles.div3}>{estudianteMaterias}</div>
        </div>
      </div>
    </div>
  );
};

export default RankingPerson;
