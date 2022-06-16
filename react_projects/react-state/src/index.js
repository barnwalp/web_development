import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BasicState from './BasicState';
import ArrayState from './ArrayState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<BasicState />
		<ArrayState />
	</div>
);
