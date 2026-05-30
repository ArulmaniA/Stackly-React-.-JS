import  {useState} from 'react'
import './UseState.css'

function UseState() {

    const [count, setCount] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);



  return (

    <div>
         <div className={darkTheme ? "app dark" : "app light"}>
      <div className="container">
        <h1>useState Counter App</h1>

        <h2 className="count">{count}</h2>

        <div className="button-group">
          <button onClick={()=> setCount(count+1)}>Increment</button>
          <button onClick={()=> setCount(count-1)}>Decrement</button>
          <button onClick={()=> setCount(0)}>Reset</button>
        </div>

        <button className="theme-btn" onClick={()=> setDarkTheme(!darkTheme)}>
          Change to {darkTheme ? "Light" : "Dark"} Theme
        </button>
      </div>
    </div>
  
    </div>

  )
}

export default UseState
