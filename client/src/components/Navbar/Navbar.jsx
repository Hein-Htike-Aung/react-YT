import React from 'react';
import { Button, Container, Input, Search, Wrapper } from './styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder='Search' />
					<SearchOutlinedIcon />
				</Search>
				<Button>
					<AccountCircleOutlinedIcon />
					SIGN IN
				</Button>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
