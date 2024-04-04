import { useState } from "react"
import Bookcard from "./Bookcard"

export default function Searchresults({content, setQuery, setCurrentId}){
    const [search, setSearch] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    const handleClick = (id)=>{
        setCurrentId(id)
    }

    console.log("S", content)

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Søk etter bøker:</label>
                <input type="text" id="search" placeholder="Skriv boktittel her" onChange={handleChange}></input>
                <input type="submit" value="Søk"></input>
            </form>
            <section>
                <h2>Søkeresultater</h2>
                <Bookcard content={content}/>
            </section>
        </>
    )
}