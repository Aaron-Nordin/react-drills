import React, {Component} from "react"

export default class LoginButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.alert()}>Login</button>
        )
    }
}