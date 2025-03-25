import { useState } from 'react';
import BgScreen from './bgScreen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BgScreen/>
  );
}

export default App;
