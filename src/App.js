import './App.css';
import {useRef,useState,useEffect} from "react";

function App() {
  const searchInput=useRef(null);
  let [data,setdata]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${e.target[0].value},${e.target[1].value},${e.target[2].value}`)
  };
    function handleName(){
      searchInput.current.focus()
    }
    function handleEmail(){
      searchInput.current.focus()
    }
    function handlePassword(){
      searchInput.current.focus()
    }
 

  const handleSearch = (e) => {
    // log your value here
  };

  const debounce = (callback, delay) => {
    // add your debounce logic here
  };
  const debouncedSearch = debounce(handleSearch, 1000);
  function getData(){
    fetch("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=R8aF3nJDcInm5UCwx0rlYcHXA4FIhv5M&limit=5")
    .then((response)=>response.json())
    .then((result)=>setdata(result))
  }
  useEffect(()=>{getData()},[])
  return (
         <>
          <div>
            <p>part 1</p>
            <form onSubmit={handleSubmit}>
            <label>
              Name: 
              <input placeholder="name" type="text" />
            </label>
            <label>
              Email:
              <input placeholder="email" type="text" />
            </label>
    
    
            <label>
              Password:
              <input placeholder="password" type="text" />
            </label>
            <hr />
            <button onClick={handleName}>Focus Name Input</button>
            <button onClick={handleEmail}>Focus Email Input</button>
            <button onClick={handlePassword}>Focus Password Input</button>
            <hr />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            </form>
         
          </div>
          <div>
            <hr />
            <p>part 2</p>
            <label>
              Search:
              <input
                placeholder="search with debounce"
                type="text"
                onChange={event=>debouncedSearch(event)}
              />
            </label>
            {data.map((data)=>(
              <div className="layout">
              <div className='box'>
                <p>information</p>
                </div>
                </div>
            ))}
          </div>
        </>
      );
    }


export default App;
