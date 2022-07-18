import React from 'react';
import { Button, Container, Input, Search, Wrapper } from './styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder='Search' />
					<SearchOutlinedIcon />
				</Search>
				<Link to={'/signin'} className='link'>
					<Button>
						<AccountCircleOutlinedIcon />
						SIGN IN
					</Button>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
