import React from 'react';
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	const login = event => {
		event.preventDefault()
		localStorage.setItem('auth', 'true')
		setIsAuth(true)
	}
	return (
		<div style={{ marginTop: 80, }}>
			<h1 style={{ color: 'teal', textAlign: 'center', marginBottom: 20 }}>Login Page</h1>
			<form >
				<MyInput type='text' placeholder="Enter login" />
				<MyInput type='password' placeholder="Enter password" />
				<MyButton onClick={login}>Login</MyButton>
			</form>
		</div>
	);
};

export default Login;
