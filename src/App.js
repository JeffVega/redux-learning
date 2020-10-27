import React from 'react';
import Main from './components/main'
import connect from 'redux'
function App({counter}) {
  return (
    <>
      <Main/>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
      counter:state.counter
  }
}
export default App;
