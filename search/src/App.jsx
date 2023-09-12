import { useState , useEffect} from 'react'
import axios from 'axios'
import './style.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {

    async function getPizza() {
      const res = await axios.get('https://6392e59c11ed187986a3e9ce.mockapi.io/pizzas')

      setCount(res.data)
    }

    getPizza()

  },[])




  return (
    <>
      <input placeholder='search' type='text'/>
      <div className='all'>
        {count.map( obj => 
        <div className='pizza'>
          <img src={obj.imageUrl} alt="" />
          <p>{obj.title}</p>
          </div> )}
      </div>
    </>
  )
}

export default App
