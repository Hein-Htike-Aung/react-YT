import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;

export const Wrapper = styled.div`
	padding: 22px 96px;
`;

export const Main = styled.div`
	flex: 6;
	background-color: ${({ theme }) => theme.bg};
`;
