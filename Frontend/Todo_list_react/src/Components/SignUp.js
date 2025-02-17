import React, {useState} from 'react';
import Login from './Login';
import Button from './Button';
function SignUp(){
    const [Name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const SubmitHandler = (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Username already exists');
            return;
        }

        const newUser = { Name, username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('User Registered');
        setIsRegistered(true);
    }
    if(isRegistered){
        return <Login/>
    } 
    return (
        <>
        <div class='signup'>
            <h1>SignUp</h1>
            <form onSubmit={SubmitHandler}>
                <input type="text" placeholder="Enter Full Name" value={Name} onChange={(event)=> setName(event.target.value)} required/>
                <input type="Email" placeholder="Email" value={username} onChange={(event)=> setUsername(event.target.value)}  required />
                <input type="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)} required/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event)=> setConfirmPassword(event.target.value)} required/>
                <Button Name='SignUp'/>
            </form>
        </div>
         <div class='btns'>
                <p>Already have an account ?<a href="/Login" class='button'>Login</a></p>
                <p>Move back to<a href="/" class='button'>Home</a></p>
            </div>
        </>
    )
}

export default SignUp;