import React, { useState } from 'react'



export default function Search() {
   
    const [query, setQuery]=useState('');
    const[results,setResults]=useState([])
    const handleSearch = async()=>{
        if(query){
            try {
                const response = await fetch(`https://task-raftlab-edh.onrender.com/search/${query}`);
                const data = await response.json()
                setResults(data);

            } catch (error) {
                console.log('Error fetching seach result :',error)
            }
        }
    }
  return (
    <div>
     
            <input
              class="form-control mr-sm-2"
              type="search"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
             
              placeholder="Search"
              aria-label="Search"
            />
            <button onClick={handleSearch} class="btn btn-outline-success my-2 " type="submit">
              Search
            </button>
            
            <ul>
                {
                    results.map((iterm)=>(

                        <li key={iterm._id}>
                           
                           {iterm.title}      :     {iterm.description}
                        
                        </li>
                    ))
                }
            </ul>
         
    </div>
  )
}
