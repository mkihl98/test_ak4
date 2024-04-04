import { useState } from "react"
import Bookcard from "./Bookcard"

export default function Searchresults({books, setQuery}){
    const [search, setSearch] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    console.log("Sjekk", books)

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Søk etter bøker:</label>
                <input type="text" id="search" placeholder="Skriv boktittel her" onChange={handleChange}></input>
                <input type="submit" value="Søk" disabled={search.length < 3}></input>
            </form>
            <section>
                <Bookcard books={books}/>
            </section>
        </>
    )
}