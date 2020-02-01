import React, { Fragment, useState, useEffect } from 'react';
import cx from 'classnames';

import './style.scss';
import { DARK, LIGHT } from './constants';
import MoonIcon from './moon';
import SunIcon from './sun';

function ThemeSwitcher() {
	const [ theme, setTheme ] = useState(DARK);
	const isChecked = theme === DARK;

	useEffect(
		() => {
			const html = document.documentElement;

			html.classList.toggle('zi-dark-theme', isChecked);
		},
		[ theme ]
	);

	return (
		<div
			className="theme-switcher"
			onClick={() => setTheme(isChecked ? LIGHT : DARK)}
			style={{
				background: isChecked
					? 'linear-gradient(rgb(9, 18, 54), rgb(30, 33, 93))'
					: 'linear-gradient(rgb(57, 89, 138), rgb(121, 215, 237))'
			}}>
			<SunIcon stroke="#FFD073" transform={`translate(0, ${isChecked ? 100 : 0})`} />
			<MoonIcon transform={`translate(0, ${isChecked ? 0 : -100})`} />
		</div>
	);
}

export default ThemeSwitcher;
