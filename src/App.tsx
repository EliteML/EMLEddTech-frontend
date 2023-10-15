import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProblemList from './components/ProblemList';

/*
function App() {

  const [data, setData] = useState<String | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data').then(response => {
      setData(response.data.message);
    });
  }, []);

  return (
    <div className="App">
      <h1>Message from Flask Backend</h1>
      {data ? <div>{data}</div> : <div>Loading...</div>}
    </div>
  );
}
*/

const App: React.FC = () => {
  return (
    <div className='App'>
      <ProblemList />
    </div>
  )
}
export default App;
