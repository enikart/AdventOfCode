import React from "react";


class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>Welcome to my <span className={'important-text'}>AdventOfCode React</span> Project</p>
                <p>You can navigate through the years to see the result of each exercice I made. Enjoy !</p>
            </div>
        );
    }
}

export default Home;
