import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Jag triggas varje gång komponenten renderas om');
  // });

  useEffect(() => {
    console.log('Jag triggas när komponenten mountas');
  }, []);

  useEffect(() => {
    console.log('Jag triggas varje gång som count ändras, count är nu ' + count);
  }, [count]);

  return (
    <div className="app">
      <button 
        onClick={ () => setCount(c => c + 1) }
      >
        Öka
      </button>
      <p>{count}</p>
    </div>
  )
}

export default App
