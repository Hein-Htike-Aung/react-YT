import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import { Container, Main, Wrapper } from './styles';
import { darkTheme, lightTheme } from './utils/Theme';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
				<Main>
					<Navbar />
					<Wrapper>
						<Routes>
							<Route path='/'>
								<Route index element={<Home />} />
								<Route path='video'>
									<Route path=':id' element={<Video />} />
								</Route>
							</Route>
						</Routes>
					</Wrapper>
				</Main>
			</Container>
		</ThemeProvider>
	);
};

export default App;
