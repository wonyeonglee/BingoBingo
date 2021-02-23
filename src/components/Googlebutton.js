import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const clientId = "989588997117-upnmd8ht8gpfh2bd3tkq4dqum4v28l3r.apps.googleusercontent.com"

class Googlebutton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        console.log(res)
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="구글로 로그인하기"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`


export default Googlebutton;