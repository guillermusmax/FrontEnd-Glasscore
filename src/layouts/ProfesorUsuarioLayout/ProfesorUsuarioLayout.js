import styles from "./ProfesorUsuarioLayout.module.scss";
import { MenuBarProfesor } from "@/components/Layout/MenuBarProfesor/MenuBarProfesor";
import { ContentAdmin } from "@/components/Layout/Content/Content";
import { TopLogo } from "@/components/Layout/TopLogo/TopLogo"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export function ProfesorUsuarioLayout(){
    const [menuVisible, setMenuVisible] = useState(true);
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

    return(
        <div>
            <MenuBarProfesor menuVisible={menuVisible} setMenuVisible={setMenuVisible} onSelectOption={handleSelectOption}/>
            <ContentAdmin menuVisible={menuVisible} selectedOption={selectedOption}/>
        </div>
    )
}