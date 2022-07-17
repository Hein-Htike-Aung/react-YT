import styled from 'styled-components';

export const Container = styled.div`
	width: 360px;
	margin-bottom: 45px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 202px;
	background-color: #999;
	object-fit: cover;
`;

export const Details = styled.div`
	display: flex;
	margin-top: 16px;
	gap: 12px;
`;

export const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	object-fit: cover;
	background-color: #999;
`;

export const Texts = styled.div`

`;
export const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({theme}) => theme.text};
`;
export const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({theme}) => theme.textSoft};
	margin: 9px 0;
`;
export const Info = styled.div`
	font-size: 1px;
	color: ${({theme}) => theme.textSoft};
`;