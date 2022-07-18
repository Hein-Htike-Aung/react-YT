import React from 'react';
import Comment from '../Comment/Comment';
import { Avatar, Container, Input, NewComment } from './styles';

const Comments = () => {
	return (
		<Container>
			<NewComment>
				<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIlZqRJLGUFMTJJIkOyHBxnICLQpa2NFSZQ&usqp=CAU' />
				<Input placeholder='Add a comment...`' />
			</NewComment>
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</Container>
	);
};

export default Comments;
