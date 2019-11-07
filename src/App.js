import React, {Component} from 'react';

import Intro from './Intro.js'
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Toast from "react-bootstrap/Toast";
// import Container from 'react-bootstrap/Container';

import './App.css';

// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <Toast show={show} onClose={() => toggleShow(!show)}>
//       <Toast.Header>
//         <strong className="mr-auto">React-Bootstrap</strong>
//       </Toast.Header>
//       <Toast.Body>{children}</Toast.Body>
//     </Toast>
//   );
// };

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
      </div>
    )
  };
};

export default App;
