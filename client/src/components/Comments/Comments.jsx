import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { axiosInstance } from '../../axios-config';
import Comment from '../Comment/Comment';
import { Avatar, Container, Input, NewComment } from './styles';

const Comments = ({ video }) => {
	const [comments, setComments] = useState([]);

	const { currentUser } = useSelector((state) => state.user);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const res = await axiosInstance.get(`/comments/${video._id}`);

				setComments(res.data);
			} catch (error) {}
		};
		fetchComments();
	}, [video._id]);

	return (
		<Container>
			<NewComment>
				<Avatar src={currentUser.img} />
				<Input placeholder='Add a comment...`' />
			</NewComment>
			{comments.map((c) => (
				<Comment key={c._id} comment={c} />
			))}
		</Container>
	);
};

export default Comments;
