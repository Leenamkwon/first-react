import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 업데이트가 시작하기 전에 호출됩니다.
  // props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용합니다.
  static getDerivedStateFromProps(nextProps, prevState) {
    // 조건에 따라 특정값 동기화
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 렌더링이 끝난 뒤
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메소드입니다.
  // 이 메서드에서는 반드시 true 값 또는 false 값을 반환해야 한다. 기본적으로 이 메서드를 생성하지 않으면 true 값을 반환
  // props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메소드
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 컴포넌트 변화를 DOM에 반영하기 직전에 변화가 일어나기 바로 직전에 호출하는 메소드입니다.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메소드입니다.
  // getSnapshotBeforeUpdate의 snapshot을 조회
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
