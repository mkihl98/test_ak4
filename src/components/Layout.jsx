import { Link } from "react-router-dom"

export default function Layout({children}){
    return(
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