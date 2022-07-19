import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { axiosInstance, axiosJWTInstance } from '../../axios-config';
import Comments from '../../components/Comments/Comments';
import { subscription } from '../../redux/userSlice';
import { dislikeVideo, fetchSuccess, likeVideo } from '../../redux/videoSlice';
import {
	Button,
	Buttons,
	Channel,
	ChannelCounter,
	ChannelDetails,
	ChannelInfo,
	ChannelName,
	Container,
	Content,
	Description,
	Details,
	Hr,
	Image,
	ImageContainer,
	Info,
	Subscribe,
	Title,
	VideoFrame,
	VideoWrapper,
} from './styles';
import Recommendation from '../../components/Recommendation/Recommendation';

const Video = () => {
	const { currentUser } = useSelector((state) => state.user);
	const { currentVideo } = useSelector((state) => state.video);

	const dispatch = useDispatch();

	const [channel, setChannel] = useState({});

	const videoId = useLocation().pathname.split('/')[2];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const videoRes = await axiosInstance.get(`/videos/${videoId}`);

				dispatch(fetchSuccess(videoRes.data));

				const channelRes = await axiosInstance.get(
					`/users/${videoRes.data.userId}`,
				);

				setChannel(channelRes.data);
			} catch (error) {}
		};

		fetchData();
	}, [dispatch, videoId]);

	const handleLike = async () => {
		await axiosJWTInstance(currentUser).patch(
			`/videos/like/${currentVideo._id}`,
		);
		dispatch(likeVideo(currentUser._id));
	};

	const handleDisLike = async () => {
		await axiosJWTInstance(currentUser).patch(
			`/videos/dislike/${currentVideo._id}`,
		);
		dispatch(dislikeVideo(currentUser._id));
	};

	const handleSubscription = async () => {
		currentUser.subscribedUsers.includes(channel._id)
			? await axiosJWTInstance(currentUser).patch(
					`users/unsubscribe/${channel._id}`,
			  )
			: await axiosJWTInstance(currentUser).patch(
					`users/subscribe/${channel._id}`,
			  );

		dispatch(subscription(channel._id));
	};

	return (
		<Container>
			<Content>
				<VideoWrapper>
					<VideoFrame src={currentVideo.videoUrl} controls />
				</VideoWrapper>
				<Title>{currentVideo.title}</Title>
				<Details>
					<Info>
						{currentVideo.views} views •{' '}
						<TimeAgo date={currentVideo.createdAt} />
					</Info>
					<Buttons>
						<Button onClick={handleLike}>
							{currentVideo.likes.includes(currentUser._id) ? (
								<ThumbUpIcon />
							) : (
								<ThumbUpOutlinedIcon />
							)}
							{currentVideo.likes.length}
						</Button>
						<Button onClick={handleDisLike}>
							{currentVideo.dislikes.includes(currentUser._id) ? (
								<ThumbDownIcon />
							) : (
								<ThumbDownOffAltOutlinedIcon />
							)}
							Dislike
						</Button>
						<Button>
							<ReplyOutlinedIcon /> Share
						</Button>
						<Button>
							<AddTaskOutlinedIcon /> Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<ImageContainer>
							<Image src={channel.img} />
						</ImageContainer>
						<ChannelDetails>
							<ChannelName>{channel.name}</ChannelName>
							<ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
							<Description>{currentVideo.desc}</Description>
						</ChannelDetails>
					</ChannelInfo>
					{currentUser.subscribedUsers.includes(channel._id) ? (
						<Subscribe type='subscribed' onClick={handleSubscription}>
							SUBSCRIBED
						</Subscribe>
					) : (
						<Subscribe onClick={handleSubscription}>SUBSCRIBE</Subscribe>
					)}
				</Channel>
				<Hr />
				<Comments video={currentVideo} />
			</Content>
			{/* Show Recommendation videos by using current video tags */}
			<Recommendation tags={currentVideo.tags} />
		</Container>
	);
};

export default Video;
