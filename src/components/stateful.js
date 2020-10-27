import React,{Component} from 'react';


export default class Popup extends Component{
constructor(){
    super()
    this.state ={
        txt:" John"
    }

}
handleChangeName(e){
    this.setState({
        txt:e.target.value
    })
}

render(){
    console.log(this.state)
    return(
        <>
            <h1>
                Hello {this.state.txt}
            </h1>
            <input  onChange={(e) => this.handleChangeName(e)}  type="text" />
            {/* <button type="button" onClick={() => this.handleChangeName()}>
                Change Name
            </button> */}
        </>
    )
}


}