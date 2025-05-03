// App.js

import Grandparent from './Grandparent';
import { MyContext } from './MyContext';

const App = () => {
  const message = 'Hello from App!';

  return (
    <MyContext.Provider value={{ message }}>
      <Grandparent />
    </MyContext.Provider>
  );
};

export default App;
