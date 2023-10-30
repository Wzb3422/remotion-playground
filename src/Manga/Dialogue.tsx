import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

const title: React.CSSProperties = {
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	position: 'absolute',
	bottom: 160,
	width: '100%',
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Dialogue: React.FC<{
	text: string;
	top: number;
	left: number;
}> = ({text, top = 0, left = 0}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<div
			className="px-3 py-2 absolute border border-solid border-slate-800	bg-white rounded w-40"
			style={{ top, left }}
		>
			<span className='text-slate-800	'>
				{text}
			</span>
		</div>
	);
};
