import React, { useState } from 'react';
import Info from './info';

// 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: '#000000',
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <LifeCycleSample color={this.state.color} />
//       </div>
//     );
//   }
// }

const App = () => {
  return <Info />;
};

export default App;
