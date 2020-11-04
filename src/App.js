import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://apicarros.com/v1/consulta/qqt5645/json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems([result]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error){
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <h1>React Hook Test</h1>
        <h3>Car API</h3>
        <ul>
            {items.map(item => (
              <li key={item.placa}>
                {item.placa} {item.modelo}
              </li>
            ))}
        </ul>
      </div>
    );
  }
  
  
}

export default App;
