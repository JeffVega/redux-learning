import React,{useState,useEffect} from 'react';



const Main = () =>{
    const [Data,setData] = useState("");
    const [Incoming,setIncoming] = useState([])
    

 const handleSubmit = (e)=>{
     e.preventDefault()
     fetch('http://localhost:5000/shortUrls',{
         method:"POST",
         headers:{"Content-Type":"application/json"},
         body: JSON.stringify({
             fullUrl:Data
         })
     })
     .then(res => res.json())
     .then(json => setData(json) ).catch(e)
 }

      const handleGet = (e) =>{
          e.preventDefault();
          fetch('http://localhost:5000').then(res => res.json()).then(json => setIncoming(json.shortUrls) )
      }

    console.log(Data,'this is our Data')
    console.log(Incoming)
    return(
        <>

        <form onSubmit={handleSubmit}>
            <h1>Website Name</h1>
            <input name='fullUrl' value={Data} onChange={event => setData(event.target.value)} />
           <button type="submit">
               Add Website
           </button>

        
        </form>
            <button onClick={handleGet}>
                Get Website
            </button>
            {Incoming && Incoming.map((index,key)=>{
                return(
                    <div>
                        <h1>{index.full}</h1>
                    </div>
                )
            })}
        </>
    )
}

export default Main;


