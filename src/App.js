import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TokenContextProvider } from './contexts/TokenContext';
import { ContentContextProvider } from './contexts/ContentContext';

import Home from './pages/home';
import Album from './pages/album';
import Artist from './pages/artist';

const App = () => (
	<TokenContextProvider>
		<ContentContextProvider>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/album' component={Album} />
					<Route exact path='/artist/:id' component={Artist} />
				</Switch>
			</Router>
		</ContentContextProvider>
	</TokenContextProvider>
);

export default App;
