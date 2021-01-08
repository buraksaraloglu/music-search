import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
	const [contentStorage, setContentStorage] = useState([]);

	return (
		<ContentContext.Provider value={{ contentStorage, setContentStorage }}>
			{children}
		</ContentContext.Provider>
	);
};

const useContentContextValue = () => useContext(ContentContext);

export { ContentContext, ContentContextProvider, useContentContextValue };

ContentContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
