import styles from './Seleccion.module.scss';
export function Seleccion(){
    return(
        <div>
         <h1 className={styles.pagetitle}>selección</h1>
         <div className="relative h-screen w-screen"> {/* Contenedor padre */}
    <button className="flex justify-center items-center w-[152px] md:w-auto h-[39px] py-[8.5px] px-[36px] flex-shrink-0 rounded-[32px] bg-white shadow absolute left-[315px] top-[224px] md:left-auto md:top-auto">
        Cancelar
    </button>
</div>

        </div>
    )
}