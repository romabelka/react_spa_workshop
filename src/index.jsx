import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends Component {
    render() {
        return <h2>HelloWorld</h2>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
