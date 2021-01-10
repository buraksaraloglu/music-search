import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TokenContextProvider } from './contexts/TokenContext';
import { ContentContextProvider } from './contexts/ContentContext';
import { PlayerContextProvider } from './contexts/PlayerContext';

import Home from './pages/home';
import Album from './pages/album';
import Artist from './pages/artist';

import { MusicPlayerContainer } from './containers/MusicPlayer/MusicPlayer';

const App = () => {
	return (
		<TokenContextProvider>
			<ContentContextProvider>
				<PlayerContextProvider>
					<Router>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/album/:id' component={Album} />
							<Route exact path='/artist/:id' component={Artist} />
						</Switch>
					</Router>
					<MusicPlayerContainer />
				</PlayerContextProvider>
			</ContentContextProvider>
		</TokenContextProvider>
	);
};

export default App;
