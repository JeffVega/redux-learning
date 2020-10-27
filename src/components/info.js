import React from 'react'
import {useSelector,useDispatch} from 'react-redux';

import {increment, decrement} from '../actions/index';

function Info() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
           
           <button onClick={() => dispatch(increment())}>
               Increment 
           </button>
           <button onClick={() => dispatch(decrement())}>
               Decrement 
           </button>
           {counter}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         counter:state.counter
//     }
// }
// const mapDisptachToProps = (dispatch) => {
//     return bindActionCreators({
//         increment,
//         decrement
//     },dispatch)
// }
export default Info;