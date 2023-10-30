import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

const title: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
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
}> = ({text}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();


	return (
		<div className="px-1 py-2">
			<span
				style={{
					color: '#444',
				}}
			>
				{text}
			</span>
		</div>
	);
};
