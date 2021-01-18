import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import DynamicText from './DynamicText';

function App() {
  const refDiv = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>();
  useEffect(() => {
    if (refDiv?.current) {
      // @ts-ignore
      const childElm = refDiv?.current.firstElementChild;
      console.log(childElm);
      if (childElm && inputValue) {
        childElm.innerHTML = inputValue;
      }
    }
  }, [inputValue]);



  return (
    <div className="App" ref={refDiv}>
      <DynamicText />
      <input onChange={e => setInputValue(e.target.value)} />
    </div>
  );
}

export default App;
