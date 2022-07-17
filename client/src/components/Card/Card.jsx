import React from 'react';
import {
	ChannelImage,
	ChannelName,
	Container,
	Details,
	Image,
	Info,
	Texts,
	Title,
} from './styles';
import { Link } from 'react-router-dom';

const Card = () => {
	return (
		<Link to='/video/test' className='link'>
			<Container>
				<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTKiM3wjh5k1vSyyECaMYq14aijdTCyh3vw&usqp=CAU' />
				<Details>
					<ChannelImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIlZqRJLGUFMTJJIkOyHBxnICLQpa2NFSZQ&usqp=CAU' />
					<Texts>
						<Title>Test Video</Title>
						<ChannelName>Xiao Dev</ChannelName>
						<Info>232, 233 Views . 1 day ago</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};

export default Card;
