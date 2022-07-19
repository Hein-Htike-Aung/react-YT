import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../axios-config';
import Card from '../Card/Card';
import { Container } from './styles';

const Recommendation = ({ tags }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideosByTags = async () => {
			const res = await axiosInstance.get(
				`/videos/recommendation/tags?tags=${tags}`,
			);
			setVideos(res.data);
		};

		fetchVideosByTags();
	}, [tags]);

	return (
		<Container>
			{videos.map((video) => (
				<Card type='sm' key={video._id} video={video} />
			))}
		</Container>
	);
};

export default Recommendation;
