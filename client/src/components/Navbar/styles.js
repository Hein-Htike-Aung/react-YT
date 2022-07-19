import styled from 'styled-components';

export const Container = styled.div`
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.bgLighter};
	height: 56px;
`;
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 20px;
	justify-content: flex-end;
	position: relative;
`;
export const Search = styled.div`
	width: 40%;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	border: 1px solid #333;
	border-radius: 3px;
	color: ${({ theme }) => theme.text};
`;
export const Input = styled.input`
	border: none;
	outline: none;
	width: 80%;
	background-color: transparent;
	color: ${({ theme }) => theme.text};
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: #999;
`;

export const Button = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 5px;
`;
