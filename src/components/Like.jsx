
import React, { Component } from "react";

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            liked: false
        };
    }

    handleLike = () => {
        if (!this.state.liked) { 
            this.setState({ count: this.state.count + 1, liked: true });
        }
    };

    render() {
        return (
            <div>
                <p>Likes: {this.state.count}</p>
                <button onClick={this.handleLike}>Like</button>
            </div>
        );
    }
}

export default Like;
