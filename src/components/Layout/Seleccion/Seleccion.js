import Link from 'next/link';
import { SeleccionEstudiante } from '@/components/Layout/SeleccionEstudiante/SeleccionEstudiante';
import { BuscarAsignacion } from '@/components/Layout/BuscarAsignacion/BuscarAsignacion';
import { Dropdown, Button, Search} from "semantic-ui-react";
import styles from './Seleccion.module.scss';
import { useState, useEffect } from 'react';

export function Seleccion(){
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showMessage, setShowMessage] = useState(false);
    const [subject, setSubject] = useState(""); // Agrega el estado para el prop subject

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showMessage]);



    const handleSearchChange = (e, { value }) => {
        setSearchValue(value);
        setIsLoading(true);
      
        if (value === "") {
          // Si el valor de búsqueda está vacío, limpiar los resultados
          setSearchValue([]);
          setIsLoading(false);
        } else {
            setSearchValue(value);
            setSubject(value); // Asigna el valor del input al prop subject
            console.log(value)
        }
    }

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
                <Search 
                className={styles.searchInput} 
                loading={isLoading}
                placeholder='CBM-110'
                onSearchChange={handleSearchChange}/>
            </div>
            <div className={styles.tableContainer}>
                <BuscarAsignacion
                    subject={searchValue.toString()} />
            </div>
        </>
    );
}