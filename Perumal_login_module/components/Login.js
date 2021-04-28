import './component.css'
import {useState} from 'react';
import axios from 'axios'

function Login(){
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginFunction = async() => {
        const data = {
            email: userName,
            password: password

        }

        const response=  await axios.post('https://reqres.in/api/login',data)
        if(response.data.token!=''){
            alert("suucc")
        }else{
            alert("faileds")
        }

    }

    return(
        <div className="login_section">
            <h1>Login Form</h1>
            <form className="" >
                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required onChange={ (e)=> setUsername(e.target.value)}></input>
                    
                    <label for="psw"><b>{userName}</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required onChange={ (e)=> setPassword(e.target.value)} ></input>
                    <label for="psw"><b>{password}</b></label>
                    <button type="button" onClick={()=> loginFunction()}>Login</button>
                </div>
                    
            </form>
        </div>
    )
}
export default Login;