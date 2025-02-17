import React, {useState} from 'react';
import Button from './Button'; 
import Todo from './Todo';
function Login(){
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [isloggedin, setIsloggedin] = useState(false);

    const LoginHandler = (event) => {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username);

        if (!user) {
            alert('User not found');
            return;
        }
        else if(user.username === username && user.password === password){
            alert('Login Successful');
            setIsloggedin(true);
             
        }
        else{
            alert('Invalid Credentials');
            return;
        }    

    }
    if(isloggedin){
        return <Todo/>
    }
    return(
        <>
        <div class='login'>
            <h1>Login</h1>
            <form onSubmit={LoginHandler} >
                <input type="Email" placeholder="Email" value={username} onChange={(event)=> setUsername(event.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)} required/>
                {/* <button type="submit">Login</button> */}
                <Button Name='Login'/>
            </form>
        </div>
        <div class='btns'>
            <p>Don't have an account ?<a href="/SignUp" class='button'>SignUp</a></p>
            <p>Move back to<a href="/" class='button'>Home</a></p>
        </div>

        </>
    )
}
export default Login;