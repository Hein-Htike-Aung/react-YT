import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../../img/logo.png';
import {
	Button,
	Container,
	Hr,
	Img,
	Item,
	Login,
	Logo,
	Title,
	Wrapper,
} from './styles';

const Menu = ({ setDarkMode, darkMode }) => {
	return (
		<Container>
			<Wrapper>
				<Link to='/' className='link'>
					<Logo>
						<Img src={Youtube} />
						YouTube
					</Logo>
				</Link>
				<Item>
					<HomeIcon />
					Home
				</Item>
				<Item>
					<ExploreOutlinedIcon />
					Explore
				</Item>
				<Item>
					<SubscriptionsOutlinedIcon />
					Subscriptions
				</Item>
				<Hr />
				<Item>
					<VideoLibraryOutlinedIcon />
					Library
				</Item>
				<Link to='/signin' className='link'>
					<Login>
						Sign in to like videos, comment, and subscribe.
						<Button>
							<AccountCircleOutlinedIcon />
							SIGN IN
						</Button>
					</Login>
				</Link>
				<Hr />
				<Title>BEST OF LAMATUBE</Title>
				<Item>
					<LibraryMusicOutlinedIcon />
					Music
				</Item>
				<Item>
					<SportsBasketballOutlinedIcon />
					Sports
				</Item>
				<Item>
					<SportsEsportsOutlinedIcon />
					Gaming
				</Item>
				<Item>
					<MovieOutlinedIcon />
					Movies
				</Item>
				<Item>
					<ArticleOutlinedIcon />
					News
				</Item>
				<Item>
					<LiveTvOutlinedIcon />
					Live
				</Item>
				<Hr />
				<Item>
					<SettingsOutlinedIcon />
					Settings
				</Item>
				<Item>
					<FlagOutlinedIcon />
					Report
				</Item>
				<Item>
					<HelpOutlineOutlinedIcon />
					Help
				</Item>
				<Item onClick={() => setDarkMode(!darkMode)}>
					<SettingsBrightnessOutlinedIcon />
					{darkMode ? 'Light' : 'Dark'} Mode
				</Item>
			</Wrapper>
		</Container>
	);
};

export default Menu;
