import * as React from 'react';
import './App.css';
//import HelloWorld from './components/HelloWorld';
//
////const logo = require('./logo.svg');
//
//class App extends React.Component<{}, {}> {
//  render(){
//    return <Hello compiler="tsc" framework="angular" />
//  }
//  //render() {
//  //  return (
//  //    <div className="App">
//  //      <div className="App-header">
//  //        <img src={logo} className="App-logo" alt="logo" />
//  //        <h2>Welcome to React</h2>
//  //      </div>
//  //      <p className="App-intro">
//  //        To get started, edit <code>src/App.tsx</code> and save to reload.
//  //      </p>
//  //    </div>
//  //  );
//  //}
//}
//

class App extends React.Component<any, any> {
  constructor(props: any){
    super(props);
  }

  public render(){
    //return <div>Hello World</div>
    //return <HelloWorld defaultName="asdf asdf" />
    return (
      <div>
        <nav>nav</nav>
        <div className="a">a</div>
        <div className="b">b</div>
        <div className="c">c</div>
      </div>
    );
  }

}

export default App;
