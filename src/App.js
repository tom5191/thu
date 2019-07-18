import React from 'react';
import './App.css';
import './theme/global.css';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Travel from './components/Travel Photography/Travel';

function App() {
	return (
		<div className="App">
			<Landing />
			<About />
			<Experience />
			<Travel />
		</div>
	);
}

export default App;
