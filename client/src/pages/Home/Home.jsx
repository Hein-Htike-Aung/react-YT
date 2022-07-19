import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { axiosJWTInstance } from '../../axios-config';
import { Container } from './styles';

const Home = ({ type }) => {
	const [videos, setVideos] = useState([]);

	const { currentUser } = useSelector((state) => state.user);

	useEffect(() => {
		const fetchVideos = async () => {
			const res = await axiosJWTInstance(currentUser).get(
				`/videos/find/${type}`,
			);

			setVideos(res.data);
		};

		fetchVideos();
	}, [currentUser, type]);

	return (
		<Container>
			{videos.map((v) => (
				<Card key={v._id} video={v} />
			))}
		</Container>
	);
};

export default Home;
