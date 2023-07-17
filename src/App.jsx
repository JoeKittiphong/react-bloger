import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import "./App.css"
import Footer from '../components/Footer'


function App() {
  const [count, setCount] = useState(null)
  const mongoDT = async () => {
    const mobgoData = await axios.get("https://easy-rose-shark-gown.cyclic.app/read")
    setCount({ ...mobgoData.data })
  }


  useEffect(() => {
    mongoDT()
  }, [!count])

  return (
    <div className='App'>
        <Navbar />
        <Home count={count} />
        <Footer/>
    </div>

  )
}

export default App
