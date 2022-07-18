import styled from 'styled-components';

export const Container = styled.div``;

export const NewComment = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Avatar = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	object-fit: cover;
`;

export const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.soft};
	background-color: transparent;
	outline: none;
	width: 100%;
	color: ${({ theme }) => theme.text};
`;
