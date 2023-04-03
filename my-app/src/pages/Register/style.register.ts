import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: ${({theme}) => theme.colors.primary.primaryNegative};
	-webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	height: 100vh;
	width: 100vw;
`;