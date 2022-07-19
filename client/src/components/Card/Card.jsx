import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { axiosInstance } from '../../axios-config';
import {
	ChannelImage,
	ChannelName,
	Container,
	Details,
	Image,
	ImageContainer,
	Info,
	Texts,
	Title
} from './styles';

const Card = ({ type, video }) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axiosInstance.get(`/users/${video.userId}`);

			setUser(res.data);
		};

		fetchUser();
	}, [video.userId]);

	return (
		<Link to={`/video/${video._id}`} className='link'>
			<Container type={type}>
				<Image type={type} src={video.imgUrl} />
				<Details type={type}>
					<ImageContainer>
						<ChannelImage type={type} src={user.img} />
					</ImageContainer>
					<Texts>
						<Title>{video.title}</Title>
						<ChannelName>{user.name}</ChannelName>
						<Info>
							{video.views} Views . <TimeAgo date={video.createdAt} />
						</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};

export default Card;
