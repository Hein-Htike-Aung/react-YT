import React from 'react';
import {
	Avatar,
	Container,
	Date,
	Details,
	ImageContainer,
	Name,
	Text,
} from './styles';

const Comment = () => {
	return (
		<Container>
			<ImageContainer>
				<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIlZqRJLGUFMTJJIkOyHBxnICLQpa2NFSZQ&usqp=CAU' />
			</ImageContainer>
			<Details>
				<Name>
					John Doe <Date>1 day ago</Date>
				</Name>
				<Text>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae harum
					necessitatibus quo ipsum sit. Fugit porro sed, minus ea voluptatem,
					corporis est minima quae iste aspernatur natus, dolor aliquid ratione.
				</Text>
			</Details>
		</Container>
	);
};

export default Comment;
