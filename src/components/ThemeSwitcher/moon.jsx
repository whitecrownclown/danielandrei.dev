import React from 'react';

export default function Moon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="#F9BB4B"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			shapeRendering="geometricPrecision"
			style={{
				color: 'color:var(--geist-foreground)'
			}}
			{...props}>
			<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
		</svg>
	);
}
