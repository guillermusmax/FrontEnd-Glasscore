/*import Head from "next/head";
import { useCallback } from "react";
import styles from "./Ranking.module.css";

const Ranking = () => {
  // const onInboxContainer2Click = useCallback(() => {
  //   // Please sync "Pensum - Estudiante" to the project
  // }, []);

  // const onInboxClick = useCallback(() => {
  //   // Please sync "Pensum - Estudiante" to the project
  // }, []);

  return (
    <a className={styles.hu03MostrarRankingYHu05}>
      <div className={styles.hu03MostrarRankingYHu051}>
        <img
          className={styles.hu03MostrarRankingYHu05Child}
          alt=""
          src="/vector-914.svg"
        />
        <div className={styles.rankingEstudiantil2023Wrapper}>
          <div className={styles.rankingEstudiantil}>
            Ranking estudiantil - 2023
          </div>
        </div>
        <div className={styles.hu03MostrarRankingYHu05Inner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.frame}>
                    <div className={styles.puesto}>Puesto #</div>
                    <div className={styles.carrera}>Carrera</div>
                    <div className={styles.estudiante}>Estudiante</div>
                  </div>
                  <div className={styles.frame1}>
                    <div className={styles.puesto}>Trimestre</div>
                    <div className={styles.indiceGeneral}>Indice general</div>
                    <div className={styles.materias}>Materias</div>
                  </div>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-915.svg"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frame2}>
                    <div className={styles.div}>2</div>
                    <a
                      className={styles.medicinaOtorrinolaringologia}
                      href={`https://www.google.com/search?client=opera-gx&hs=2ha&sca_esv=562367447&sxsrf=AB5stBiapliMUbkEA3uR3GCFDlxHbD5QnQ:1693762842375&q=otorrinolaringologo&spell=1&sa=X&ved=2ahUKEwiBrbak_o6BAxV8I0QIHRy5B2sQkeECKAB6BAgLEAE`}
                      target="_blank"
                    >
                      Medicina Otorrinolaringologia
                    </a>
                    <div className={styles.sebastianLiriano}>
                      Sebastian Liriano
                    </div>
                  </div>
                  <div className={styles.frame3}>
                    <div className={styles.div1}>9/14</div>
                    <div className={styles.groupParent}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-1171275831.svg"
                      />
                      <div className={styles.div2}>3.89</div>
                    </div>
                    <div className={styles.div3}>90/140</div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frame4}>
                    <div className={styles.div4}>3</div>
                    <div className={styles.sebastianLiriano}>
                      JCOB Tunometecabra
                    </div>
                    <div className={styles.ingenieraEnRedes}>
                      Ingeniería en Redes Computacionales
                    </div>
                  </div>
                  <div className={styles.frame5}>
                    <div className={styles.div5}>10/14</div>
                    <div className={styles.groupContainer}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-1171275832.svg"
                      />
                      <div className={styles.div6}>68%</div>
                    </div>
                    <div className={styles.div7}>100/140</div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frame6}>
                    <div className={styles.frame7} />
                    <div className={styles.frame7}>
                      <div className={styles.div4}>1</div>
                      <div className={styles.ingenieraEnRedes}>
                        Ingenieria De Software
                      </div>
                      <div className={styles.sebastianLiriano}>
                        Donato Machado
                      </div>
                    </div>
                  </div>
                  <div className={styles.frame3}>
                    <div className={styles.frame10} />
                    <div className={styles.frame10}>
                      <div className={styles.div9}>8/14</div>
                      <div className={styles.groupParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/group-1171275838.svg"
                        />
                        <div className={styles.div10}>3.9</div>
                      </div>
                      <div className={styles.div11}>80/140</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-1171275832.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-1171275832.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-1171275832.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-1171275832.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-1171275832.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame22}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div33}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-11712758321.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div35}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-11712758321.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-11712758321.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-11712758321.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frame4}>
                  <div className={styles.div4}>3</div>
                  <div className={styles.ingenieraEnRedes}>
                    Ingeniería en Redes Computacionales
                  </div>
                  <div className={styles.sebastianLiriano}>
                    JCOB Tunometecabra
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.div5}>10/14</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-11712758321.svg"
                    />
                    <div className={styles.div6}>68%</div>
                  </div>
                  <div className={styles.div7}>100/140</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filtrarPor}>Filtrar por:</div>
        <div className={styles.carrera1}>Carrera</div>
        <div className={styles.trimestre1}>Trimestre</div>
        <div className={styles.hu03MostrarRankingYHu05Inner1}>
          <div className={styles.todasParent}>
            <div className={styles.todas}>Todas</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
        <div className={styles.hu03MostrarRankingYHu05Inner2}>
          <div className={styles.todosParent}>
            <div className={styles.todos}>Todos</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      
    </a>
  );
};

export default Ranking;*/























import Head from "next/head";
import RankingFrame from "../components/RankingFrame";
import TopBar from "../components/TopBar";
import AsideBar from "../components/AsideBar";
import styles from "./Ranking.module.css";
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