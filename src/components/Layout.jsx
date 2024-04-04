import { Link } from "react-router-dom"

export default function Layout({children}){
    return( /*Generell HTML-struktur for nettsiden:*/
        <>
        <header>
            <h1>Boksøk fra OpenLibrary API</h1>
        </header>
        <main>
            {children}
        </main>
        <footer>Footer!</footer>
        </>
    )
}