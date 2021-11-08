import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [value, setValue] =useState(data)
  const displayValue = (index) =>{
    return value[index].name
  }
  return<>
    <button className={'btn'} onClick={() => setValue(1)}>Click me!</button>
  </>
}



export default App;
