export const fetchUrlRequest = () =>{
    return {
        type:"FETCH_URL_REQUEST"
    }
}

export const fetchUrlSuccess = url =>{
    return {
        type:"FETCH_URL_SUCCESS",
        payload:url
    }
}

export const fetchUrlFailure = error =>{
    return {
        type:"FETCH_URL_FAILURE",
        payload:error
    }
}





export const fetchUrls = () =>{
    return (dispatch) =>{
        dispatch(fetchUrlRequest)
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(json => dispatch(fetchUrlSuccess(json.shortUrls)))
        .catch(e => dispatch(fetchUrlFailure(e)))
    }
}



export const createUrlRequest = () =>{
    return {
        type:"CREATE_URL_REQUEST"
    }
}

export const createUrlSuccess = url =>{
    return {
        type:"CREATE_URL_SUCCESS",
        payload:url
    }
}

export const createUrlFailure = error =>{
    return {
        type:"CREATE_URL_FAILURE",
        payload:error
    }
}

export const postUrl = (url) =>{
    return (dispatch) =>{
        dispatch(createUrlRequest())
        fetch('http://localhost:5000/shortUrls',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                fullUrl:url
            })
        })
        .then(res => res.json())
        .then(json =>dispatch(createUrlSuccess(json)) )
        .catch(e => dispatch(createUrlFailure(e)))
    }
}

// const handleSubmit = (e)=>{
//     e.preventDefault()
//     fetch('http://localhost:5000/shortUrls',{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body: JSON.stringify({
//             fullUrl:Data
//         })
//     })
//     .then(res => res.json())
//     .then(json => setData(json) ).catch(e)
// }