import React from 'react';
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

const SignIn = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<SubTitle>to continue to YouTube</SubTitle>
				<Input placeholder='username' />
				<Input type='password' placeholder='password' />
				<Button>Sign in</Button>
				<Title>or</Title>
				<Input placeholder='username' />
				<Input placeholder='email' />
				<Input type='password' placeholder='password' />
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
