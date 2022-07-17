import React from 'react';
import {
	Buttons,
	Container,
	Content,
	Details,
	Recommendation,
	Title,
	VideoWrapper,
	Info,
	Button,
	Hr,
	Channel,
	ChannelInfo,
	Subscribe,
	Image,
	ChannelDetails,
	ChannelName,
	Description,
	ChannelCounter,
} from './styles';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width='100%'
						height='720'
						src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>Test Video</Title>
				<Details>
					<Info>7,948,154 views • Jun 22, 2022</Info>
					<Buttons>
						<Button>
							<ThumbUpOutlinedIcon /> 123
						</Button>
						<Button>
							<ThumbDownOffAltOutlinedIcon /> Dislike
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
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIlZqRJLGUFMTJJIkOyHBxnICLQpa2NFSZQ&usqp=CAU' />
						<ChannelDetails>
							<ChannelName>Xiao Dev</ChannelName>
							<ChannelCounter>200K subscribers</ChannelCounter>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
								ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
								ipsa maxime cum officiis ullam consectetur illum. Eligendi vel
								dicta, non molestiae quos, atque omnis facilis veritatis ut,
								laborum saepe aperiam.
							</Description>
						</ChannelDetails>
					</ChannelInfo>
					<Subscribe>Subscribe</Subscribe>
				</Channel>
			</Content>
			<Recommendation>Reco</Recommendation>
		</Container>
	);
};

export default Video;
