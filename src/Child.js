// Child.js

import { MyContext } from './MyContext';

const Child = () => {
  return (
    <MyContext.Consumer>
      {({ message }) => <p>Message in Child: {message}</p>}
    </MyContext.Consumer>
  );
};

export default Child;
