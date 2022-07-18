import React from 'react';
import {
	ChannelImage,
	ChannelName,
	Container,
	Details,
	Image,
	ImageContainer,
	Info,
	Texts,
	Title,
} from './styles';
import { Link } from 'react-router-dom';

const Card = ({ type }) => {
	return (
		<Link to='/video/test' className='link'>
			<Container type={type}>
				<Image
					type={type}
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTKiM3wjh5k1vSyyECaMYq14aijdTCyh3vw&usqp=CAU'
				/>
				<Details type={type}>
					<ImageContainer>
						<ChannelImage
							type={type}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIlZqRJLGUFMTJJIkOyHBxnICLQpa2NFSZQ&usqp=CAU'
						/>
					</ImageContainer>
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
