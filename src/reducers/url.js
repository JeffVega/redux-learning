
let initialState = {
    loading: false,
    url: [],
    error: ''
  }
  


const urlData = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case "FETCH_URL_REQUEST":
        return {
          ...state,
          loading: true
        }
      case "FETCH_URL_SUCCESS":
        return {
          loading: false,
          url: action.payload,
          error: ''
        }
      case "FETCH_URL_FAILURE":
        return {
          loading: false,
          url: [],
          error: action.payload
        }
        case "CREATE_URL_REQUEST":
        return {
          ...state,
          loading: true
        }
      case "CREATE_URL_SUCCESS":
        return {
          loading: false,
          url: [...state.url,action.payload],
          error: ''
        }
      case "CREATE_URL_FAILURE":
        return {
          loading: false,
          url: [],
          error: action.payload
        }
        
        default:
            return state;
    }
  }

  export default urlData;