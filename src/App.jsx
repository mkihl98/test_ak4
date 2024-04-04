import { Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Searchresults from './components/Searchresults'

function App() {
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james bond")
  const [currentId, setCurrentId] = useState(null)

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
    }catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(()=>{
    getData()
  }, [query])

  return (
    <Layout>
      <Routes>
        {/*<Route index element={<Home content={content}/>} />*/}
        <Route index element={<Searchresults content={content} setQuery={setQuery} setCurrentId={setCurrentId} />}/>
      </Routes>
    </Layout>
  )
}

export default App
