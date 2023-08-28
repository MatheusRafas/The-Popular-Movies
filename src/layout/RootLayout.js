import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css"

export  function RootLayout() {
    return(
        <>
            <header className={styles.header}>
                <h1>Bem-Vindo á aplicação de Filmes Populares</h1>
                
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                </ul>
            </header>

            {/* Renderização das Págs */}
            <Outlet/>
            {/* */}
            
            <footer className={styles.footer}>
                Copyright 2023. Todos os direiros reservados
            </footer>
        </>
    )
}