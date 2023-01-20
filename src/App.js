import React,{useState} from 'react'
import Products from './Products'

const App = () => {
  const [search,setSearch]=useState("")
  const [data,setData] =useState([])

  const YOUR_APP_ID = "c0c87637";
  const YOUR_APP_KEY ="4e80eae458527daa831dad9a2a14d266";

  const submitHandler = e =>{
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
    response => response.json() 
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h3>Food Recipe Application</h3>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
          <input type="submit" className='btn btn-primary' value="Search" />
        </form>
        {data.length>=1? <Products data={data}/>:null}
      </center>
    </div>
  )
}

export default App
