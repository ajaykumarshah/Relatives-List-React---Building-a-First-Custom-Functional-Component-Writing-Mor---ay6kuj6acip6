import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        let relatives = ["singrauli", "bhopal", "indore", "jabalpur"];
        let relatives_with_list = relatives.map((relative, index) => {

            return <li key={`relativeListItem${index + 1}`}> {relative} </li>
        })
        return (
            <div id="main">

                <ol key="relativeList">
                    {relatives_with_list}
                </ol>
            </div>
        )
    }
}


export default App;
