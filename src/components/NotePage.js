import React , {Component} from 'react';

export default class NotePage extends Component{
    render() {
        return (
            <div className="jumbotron">
                <div>{this.props.children}</div>
            </div>
        );
    }

}