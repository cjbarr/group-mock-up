import React, { Component } from 'react';


class Project extends Component {



    homeButton = (event) => {
        this.props.history.push({ pathname: '/'})

    }

    render() {
        return (
            <div>
                <h1>This is your project!</h1>
                <h2>What you've got coming up next:</h2>
                <h4>A lot of things that we don't know yet</h4>
                <h4>A lot of things that we don't know yet</h4>
                <br></br>
                <br></br>
                <p onClick={this.homeButton}>Take me home please</p>

            </div>
        )
    }
}


export default Project;