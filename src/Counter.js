// import {Component} from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       count:0
//     }
//   }

//   componentDidMouth () {
//     console.log("componentDidMouth");
//   }

//   componentDidUpdate () {
//     console.log("componentDidUpdate");
//   }
//   render() {
//     return (
//       <>
//         <p>Butona { this.state.count } kez tıkladınız.</p>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
//       </>
//     );
//   }
// }

// componentDidMouth, componentDidUpdate

import {useState, useEffect} from "react";

function App(props) {
  const [count, setCount] = useState (props.count);
  const [text, setText] = useState(props.text);

  useEffect (() => {
    console.log("count");
  }, [count]);
  

useEffect (() => {
  console.log("componentDidMouth");
}, []);

useEffect(() => {
  console.log("componentDidMouth, componentDidUpdate");
});

  return (
    <>
        <p>Butona { count } kez tıkladınız.</p>
        <p>Girilen Text: {text}</p>
        <button onClick={ () => setCount(count+1) }>+1</button>
        <button onClick={ () => setCount(count-1) }>-1</button>
        <button onClick={ () => setCount(props.count) }>reset</button>
        <input type="text" value={text} onChange={ (e) => setText(e.target.value) }/>

        </>
  );
}

App.defaultProps = {
  count: 5,
  text: ""
}

export default App;