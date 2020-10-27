import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {fetchUrls,postUrl} from '../actions/index'


const UrlMainPage = () =>{
    const [Input, setInput] = useState("")
    const dispatch = useDispatch();
    const urlData = useSelector(state => state.urlData)
   useEffect(() => {
       dispatch(fetchUrls())
       
   }, [!urlData.loading])
   
   const postHandler = (e) =>{
       e.preventDefault()
       dispatch(postUrl(Input))
   }
  
    return(
        <>

        <form  onSubmit={(e) => postHandler(e)}>
            <h1>Website Name</h1>
            <input name='fullUrl' value={Input} onChange={event =>setInput(event.target.value)} />
           <button type="submit">
               Add Website
           </button>

        
        </form>
          
     {urlData && urlData.url.map((index,key)=>{
         return(
             <div>
                 <h1>{index.full}</h1>
             </div>
         )
     })}
        </>
      
    )
}

export default UrlMainPage;


