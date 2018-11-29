import React , {Component} from 'react';

export default function (WrappedComponent){
    class Auth extends Component {
        render () {
            return <WrappedComponent/>
        }
    }
    return Auth;
}

