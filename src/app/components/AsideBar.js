import Link from 'next/link'
import styles from './AsideBar.module.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
// import { tokens } from './Theme'
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinediIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinediIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinediIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const links = [{
    label: 'Inicio',
    route: '/'
  },{
    label: 'Asignaturas',
    route: '/asignaturas'
  },{
    label: 'Ranking',
    route: '/ranking'
  },{
    label: 'Reportes',
    route: '/reportes'
  },{
    label: 'Pensum',
    route: '/pensum'
  },{
    label: 'Historial Academico',
    route: '/reportes/academicRecord'
  },{
    label: 'Calificacion Final',
    route: '/reportes/finalGrades'
  }]



export function AsideBar() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed]
    return(

        <aside className={styles.asideStyle}> 
        <div>
          <ul className={styles.nav}>
              {links.map(({ label, route }) => (
                <li key = {route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        </aside>
    )
  }

  