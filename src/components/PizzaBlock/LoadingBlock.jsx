


import React from "react";

import ContentLoader from "react-content-loader";

function LoadingBlock() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb">
			<rect
				x="0"
				y="338"
				rx="0"
				ry="6"
				width="130"
				height="48"
			/>
			<rect
				x="159"
				y="334"
				rx="0"
				ry="6"
				width="206"
				height="52"
			/>
			<rect
				x="7"
				y="416"
				rx="0"
				ry="6"
				width="338"
				height="55"
			/>
			<circle
				cx="140"
				cy="158"
				r="130"
			/>
		</ContentLoader>
	);
}

export default LoadingBlock;
