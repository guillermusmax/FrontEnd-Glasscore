import Link from 'next/link';
import { SeleccionEstudiante } from '@/components/Layout/SeleccionEstudiante/SeleccionEstudiante';
import { BuscarAsignacion } from '@/components/Layout/BuscarAsignacion/BuscarAsignacion';
import { Dropdown, Button, Search} from "semantic-ui-react";
import styles from './Seleccion.module.scss';
import { useState, useEffect } from 'react';

export function Seleccion(){
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    return(
        <>
            <h1 className={styles.pagetitle}>Selección</h1>
            <Link href="/Estudiante/estudiantehome">
                <button 
                    onClick={() => setShowMessage(true)} 
                    class="text-white bg-[#0B3954] border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-[32px] shadow-md text-lg">
                    Confirmar
                </button>
            </Link>
            {showMessage && <div>Sus cambios se han guardado satisfactoriamente</div>}
            <div className={styles.tableContainer}>
                <SeleccionEstudiante />
            </div>
            <div className={styles.namesubject}>
                Buscar asignatura
            </div>
            <div className={styles.searchContainer}>
                <Search className={styles.searchInput} />
            </div>
            <div className={styles.tableContainer}>
                <BuscarAsignacion />
            </div>
        </>
    );
}