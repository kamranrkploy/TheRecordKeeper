import React , {Component} from 'react';

class Login extends Component {
    render(){
        return  (
            <div className="Lcontainer">
                    <div>
                        <div><h1>Slect a Login Option</h1></div>
                        <div><button>Google</button></div>
                        <div><button>Twitter</button></div>
                    </div>
            </div>
        )
    }
}

export default Login