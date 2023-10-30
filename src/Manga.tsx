import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';

import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const HelloWorld: React.FC = ({

}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
				<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
					<Logo logoColor1={logoColor1} logoColor2={logoColor2} />
				</AbsoluteFill>
		</AbsoluteFill>
	);
};
