import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BasicState from './BasicState';
import ArrayState from './ArrayState';
import ObjectState from './ObjectState';
import Box from './Box.js';
import Form from './Form.js';
import VarLength from './VarLength.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<BasicState />
		<ArrayState />
		<Box />
		<ObjectState />
		<Form />
		<VarLength />
	</div>
);
