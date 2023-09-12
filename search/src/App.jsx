import { useState , useEffect} from 'react'
import axios from 'axios'
import './style.css'

function App() {
  const [count, setCount] = useState([])
  const [val, setVal] = useState('')
  
  useEffect(() => {

    async function getPizza() {
      const res = await axios.get('https://6392e59c11ed187986a3e9ce.mockapi.io/pizzas')
      setCount(res.data)
    }
    getPizza()
  },[])

  return (
    <>
      <input placeholder='search' onChange={(event) => setVal(event.target.value)} type='text'/>
      <button>Искать</button>
      <div className='all'>
        {count.filter(obj => obj.title.toLowerCase().includes(val.toLowerCase())).map( obj => 
        <div className='pizza' key={obj.id}>
          <img src={obj.imageUrl} alt="" />
          <p>{obj.title}</p>
          </div> )}
      </div>
    </>
  )
}

export default App
