import * as React from 'react';
import './Hello.css';

//export interface Props {
//  name: string;
//  enthusiamLevel?: number;
//}
//
//function Hello({ name, enthusiamLevel = 1 }: Props) {
//  if (enthusiamLevel <= 0){
//    throw new Error('You could be a little more enthusiamLevel. :D');
//  }
//
//  return (
//    <div className="hello">
//      <div className="greeting">
//        Hello { name + getExclamationMarks(enthusiamLevel)}
//      </div>
//    </div>
//  );
//}

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props ){
  if (enthusiasmLevel <= 0){
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

//class Hello extends React.Component<Props, object>{
//  render(){
//    const { name, enthusiamLevel = 1 } = this.props;
//
//    if (enthusiamLevel <= 0){
//      throw new Error('You could be a little more enthusiastic. :D');
//    }
//
//    return (
//      <div className="hello">
//        <div className="greeting">
//          Hello { name + getExclamationMarks(enthusiamLevel)}
//        </div>
//      </div>
//    );
//  }
//}


export default Hello;

function getExclamationMarks(numChars: number){
  return Array(numChars + 1).join('!');
}
