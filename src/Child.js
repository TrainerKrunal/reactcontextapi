// Child.js

import { useContext } from 'react';
import { MyContext } from './MyContext';

const Child = () => {
  const { message } = useContext(MyContext);
  return <p>Message in Child: {message}</p>;
};

export default Child;
