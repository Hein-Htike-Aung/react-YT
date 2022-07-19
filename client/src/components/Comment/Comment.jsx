import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../axios-config';
import {
	Avatar,
	Container,
	Date,
	Details,
	ImageContainer,
	Name,
	Text,
} from './styles';
import TimeAgo from 'react-timeago';

const Comment = ({ comment }) => {
	const [channel, setChannel] = useState({});

	useEffect(() => {
		const fetchComment = async () => {
			const res = await axiosInstance.get(`/users/${comment.userId}`);

			setChannel(res.data);
		};

		fetchComment();
	}, [comment.userId]);

	return (
		<Container>
			<ImageContainer>
				<Avatar src={channel.img} />
			</ImageContainer>
			<Details>
				<Name>
					{channel.name}{' '}
					<Date>
						{' '}
						<TimeAgo date={comment.createdAt} />
					</Date>
				</Name>
				<Text>{comment.desc}</Text>
			</Details>
		</Container>
	);
};

export default Comment;
