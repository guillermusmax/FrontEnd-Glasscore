import React from 'react'
import styles from './TopBar.module.css'
import { Box} from '@mui/material'



export function TopBar() {

  return(
    <div className={styles.topBarStyle}>
    {/* TOP BAR */}
      <Box display="flex" justifyContent="right" p={2} box-shadow="4px 4px 8px rgba(0, 0, 0, 0.2)">
        
          <div><h5 className={styles.titleLogo}>GlassCore</h5></div>
            <img
              className={styles.logoImg}
              src="GlassCoreLogo.png"
              alt="Logo de GlassCore"
              width={100}
              height={24}
              priority />
      </Box>
      </div>
  )
}



