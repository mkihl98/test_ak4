import { Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import './styles/main.scss'
import Layout from './components/Layout'
import Searchresults from './components/Searchresults'

function App() {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("james bond")

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setBooks(data.docs)
    }catch{
      console.error("Her har det oppstått en feil!")
    }
  }

  useEffect(()=>{
    getData()
  }, [query])

  return (
    <Layout>
      <Routes>
        <Route index element={<Searchresults books={books} setQuery={setQuery} />}/>
      </Routes>
    </Layout>
  )
}

export default App
