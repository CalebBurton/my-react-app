import React, { Component } from 'react';
import './project.css';

class projectBuilder extends Component {
    render() {
        return(
            <div className="fakeClass">
                {this.state.greeting} {this.props.name}!
                <br/>
                <button onClick={this.frenchify}>Frenchify!</button>
            </div>
        );
    }
    frenchify() {
        this.setState({ greeting: 'Bonjour' });
      }
    constructor(props) {
      super(props);
      this.state = { greeting: 'Hello' };
      this.frenchify = this.frenchify.bind(this);
    }
}

export default projectBuilder;