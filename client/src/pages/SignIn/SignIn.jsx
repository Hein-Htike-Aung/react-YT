import React, { useState } from 'react';
import {
	Button,
	Container,
	Input,
	Link,
	Links,
	More,
	SubTitle,
	Title,
	Wrapper,
} from './styles';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { axiosInstance } from '../../axios-config';
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleSigin = async (e) => {
		e.preventDefault();

		dispatch(loginStart());

		try {
			const res = await axiosInstance.post(`/auth/signin`, {
				name,
				password,
			});

			dispatch(loginSuccess(res.data));
		} catch (error) {
			dispatch(loginFailure());
		}
	};

	const signInWithGoogle = () => {
		dispatch(loginStart());
		signInWithPopup(auth, provider)
			.then((result) => {
				axiosInstance
					.post('/auth/google', {
						name: result.user.displayName,
						email: result.user.email,
						img: result.user.photoURL,
					})
					.then((resp) => {
						dispatch(loginSuccess(resp.data));
					});
			})
			.catch((error) => {
				dispatch(loginFailure());
			});
	};

	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<SubTitle>to continue to YouTube</SubTitle>
				<Input
					placeholder='username'
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					type='password'
					placeholder='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={handleSigin}>Sign in</Button>
				<Title>or</Title>
				<Button onClick={signInWithGoogle}>Sign in wiht Goolge</Button>
				<Title>or</Title>
				<Input
					placeholder='username'
					onChange={(e) => setName(e.target.value)}
				/>
				<Input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
				<Input
					type='password'
					placeholder='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button>Sign up</Button>
			</Wrapper>
			<More>
				English(USA)
				<Links>
					<Link>Help</Link>
					<Link>Privacy</Link>
					<Link>Terms</Link>
				</Links>
			</More>
		</Container>
	);
};

export default SignIn;
