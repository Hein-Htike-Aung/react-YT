import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 24px;
`;

export const Content = styled.div`
	flex: 5;
`;

export const VideoWrapper = styled.div``;

export const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

export const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

export const Info = styled.div`
	color: ${({ theme }) => theme.textSoft};
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

export const Hr = styled.hr`
	margin: 15px 0;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

export const Recommendation = styled.div`
	flex: 2;
`;

export const Channel = styled.div`
	display: flex;
	/* justify-content: space-between; */
`;

export const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

export const ImageContainer = styled.div``;	

export const Image = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	object-fit: cover;
`;

export const ChannelDetails = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.span`
	font-weight: 500;
`;

export const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;

export const Description = styled.p`
	font-size: 14px;
`;

export const Subscribe = styled.div`
	background-color: #cc1a00;
	border: none;
	outline: none;
	font-weight: 500;
	color: white;
	border-radius: 3px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;
