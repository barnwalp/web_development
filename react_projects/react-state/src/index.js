import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BasicState from './BasicState';
import ArrayState from './ArrayState';
import ObjectState from './ObjectState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<BasicState />
		<ArrayState />
		<ObjectState />
	</div>
);
