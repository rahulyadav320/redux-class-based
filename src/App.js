import './App.css';
import { decrement, increament } from './redux/action';
import { Component } from 'react';
import { connect } from 'react-redux';
import MyHoc from './hoc/Hoc';

class App extends Component {
  state = { val: 1 };

  componentDidMount() {
    console.log('component mounted');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('====================================');
    console.log('props', props);
    console.log('state', state);
    console.log('====================================');
    return state;
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('====================================');
    console.log('snamp');
    console.log(prevProps, prevState);
    console.log('====================================');
    return null;
  }
  render() {
    console.log(this.props.message);
    return (
      <div className="App">
        <div>counter : {this.props.counter} </div>
        <div>
          <button onClick={this.props.inc}>Increament</button>
          <button onClick={this.props.dec}>Decreament</button>
        </div>
        <button onClick={() => this.setState({ val: this.state.val + 1 })}>
          dflkj
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increament()),
    dec: () => dispatch(decrement()),
  };
};

export default MyHoc(connect(mapStateToProps, mapDispatchToProps)(App));
