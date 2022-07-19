import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import { Container, Main, Wrapper } from './styles';
import { darkTheme, lightTheme } from './utils/Theme';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SignIn from './pages/SignIn/SignIn';
import Search from './pages/Search/Search';

const App = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
				<Main>
					<Navbar />
					<Wrapper>
						<Routes>
							<Route path='/'>
								<Route index element={<Home type='randoms' />} />
								<Route path='trends' element={<Home type='trends' />} />
								<Route
									path='subscriptions'
									element={<Home type='subscriptions' />}
								/>
								<Route path='search' element={<Search />} />
								<Route path='signin' element={<SignIn />} />
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
