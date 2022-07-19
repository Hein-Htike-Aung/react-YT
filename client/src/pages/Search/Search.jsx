import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../../axios-config';
import { Container } from './styles';
import Card from '../../components/Card/Card';

const Search = () => {
	const [videos, setVideos] = useState([]);

	const keyword = useLocation().search;

	useEffect(() => {
		const fetchVideos = async () => {
			const res = await axiosInstance.get(
				`/videos/search/by-keyword${keyword}`,
			);

			setVideos(res.data);
		};

		fetchVideos();
	}, [keyword]);

	return (
		<Container>
			{videos.map((video) => (
				<Card key={video._id} video={video} />
			))}
		</Container>
	);
};

export default Search;
