import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.Decrement = this.Decrement.bind(this);
        this.Increment = this.Increment.bind(this);
        this.state = {
            count: 2
        }
    }

    Increment() {
        this.setState((prevState) => {

                return {
                    count: prevState.count + 1
                }
            }
        )
    }

    Decrement() {
        this.setState((prevState) => {

            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div className="App">
                <h2>count : {this.state.count}</h2>
                <Button onClick={this.Increment} variant={"contained"} color={"primary"}>increment</Button>
                <Button onClick={this.Decrement} variant={"contained"} color={"secondary"}>decrement</Button>
            </div>
        );
    }
}

export default App;
