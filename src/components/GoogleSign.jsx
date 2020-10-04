import React,{Component} from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class GoogleButton extends Component{
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        /* 
            Send id_token for back
        */
        axios({
            method:"POST",
            baseURL:process.env.REACT_APP_SEVER_HOST,
            url:process.env.REACT_APP_SERVER_LOGIN_GOOGLE,
            data:{
                idToken:response.tokenObj.id_token
            }
        });
    };
    render(){
        return (
            <div>
                <GoogleLogin 
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default GoogleButton;