import { Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import './styles/main.scss'
import Layout from './components/Layout'
import Searchresults from './components/Searchresults'

/*Generelt har jeg brukt min egen versjon av clean-react-prosjektet som vi har holdt på med i forelesningene
som stor inspirasjon til hvordan oppgaven kunne løses, da jeg har hatt en del problemer med
å få prosjektet til å funke ordentlig. Jeg har også brukt Webtricks LMS til kurset, samt dokumentasjonen til
OpenLibrary API-et det er linket til i oppgaveteksten. I tillegg til dette har jeg fått litt hjelp av
medstudent Mia Wilhelmsen.*/

/*Jeg startet prosjektet på nytt etter å ha stått fast veldig lenge, og har kopiert over en del
kode fra det forrige prosjektet. Derfor har dette prosjektet ganske få commits.*/

function App() {
  const [books, setBooks] = useState([]) /*Holder på en array med data fra API-kallet. */
  const [query, setQuery] = useState("james bond") /*Holder på søkeverdien, men har "james bond" som standardverdi når siden lastes inn */

  const getData = async()=>{ /*Denne funksjonen fetcher API-et. */
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setBooks(data.docs) /*Laster data fra API-et inn i useState-arrayen.*/
    }catch{
      console.error("Her har det oppstått en feil!") /*Feilmelding som dukker opp hvis noe går galt med fetchingen.*/
    }
  }

  useEffect(()=>{
    getData()
  }, [query]) /*Oppdateres med nytt API-kall hver gang et søk utføres. */

  return (
    <Layout>
      <Routes>
        <Route index element={<Searchresults books={books} setQuery={setQuery} />}/>
      </Routes>
    </Layout>
  )
}

export default App
