import { useState } from "react"
import Bookcard from "./Bookcard"

export default function Searchresults({books, setQuery}){
    const [search, setSearch] = useState("") /*useState for å holde på verdiene som skrives inn i søkefeltet som en string.*/

    const handleSubmit = (e)=>{
        e.preventDefault() /*Forhindrer at nettsiden refresher når man trykker på "søk"-knappen.*/
        setQuery(search) /*Oppdaterer søkeverdien fra james bond til hva enn brukeren søker på.*/
    }

    const handleChange = (event)=>{
        setSearch(event.target.value) /*Legger til verdien i søkefeltet i useState-stringen.*/
    }

    console.log("Sjekk", books)

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Søk etter bøker:</label>
                <input type="text" id="search" placeholder="Skriv boktittel her" onChange={handleChange}></input>
                <input type="submit" value="Søk" disabled={search.length < 3}></input> {/*Søk-knappen er deaktivert fram til brukeren har skrevet inn 3 tegn i søkefeltet.*/}
            </form>
            <section>
                <Bookcard books={books}/> {/*Bookcard-komponenten holder på artikkelkortene til søketreffene.*/}
            </section>
        </>
    )
}