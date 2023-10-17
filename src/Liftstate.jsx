import React, {Component} from 'react';
class Liftstate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.namee}
                console.log({this.props.namee})
            </div>
        );
    }

}

export default Liftstate;