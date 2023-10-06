import Link from 'next/link';
import { SeleccionEstudiante } from '@/components/Layout/SeleccionEstudiante/SeleccionEstudiante';
import { Dropdown, Button, Search} from "semantic-ui-react";
import styles from './Seleccion.module.scss';

export function Seleccion(){
    return(
        <>
            <h1 className={styles.pagetitle}>Selección</h1>
            <Link href="/Estudiante/estudiantehome">
                <button class="text-white bg-[#0B3954] border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-[32px] shadow-md text-lg">Confirmar</button>
            </Link>
            <div className={styles.tableContainer}>
                <SeleccionEstudiante />
            </div>
            <div className={styles.namesubject}>
            Buscar asignatura
                    </div>
                    <div className={styles.searchContainer}>
            <Search className={styles.searchInput} />
          </div>
        </>
    );
}