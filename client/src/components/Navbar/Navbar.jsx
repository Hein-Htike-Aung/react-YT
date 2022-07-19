import React, { useState } from 'react';
import {
	Avatar,
	Button,
	Container,
	Input,
	Search,
	User,
	Wrapper,
} from './styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import Upload from '../Upload/Upload';

const Navbar = () => {
	const [openDialog, setOpenDialog] = useState(false);

	const { currentUser } = useSelector((state) => state.user);

	const [keyword, setKeyword] = useState('');

	const navigate = useNavigate();

	return (
		<>
			<Container>
				<Wrapper>
					<Search>
						<Input
							onChange={(e) => setKeyword(e.target.value)}
							placeholder='Search'
						/>
						<SearchOutlinedIcon
							onClick={() => navigate(`/search?keyword=${keyword}`)}
						/>
					</Search>
					{currentUser ? (
						<User>
							<VideoCallOutlinedIcon onClick={() => setOpenDialog(true)} />
							<Avatar src={currentUser.img} />
							{currentUser.name}
						</User>
					) : (
						<Link to={'/signin'} className='link'>
							<Button>
								<AccountCircleOutlinedIcon />
								SIGN IN
							</Button>
						</Link>
					)}
				</Wrapper>
			</Container>
			{openDialog && <Upload setOpenDialog={setOpenDialog} />}
		</>
	);
};

export default Navbar;
