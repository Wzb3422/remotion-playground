import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
  Img,
  staticFile,
} from 'remotion';

export const Image: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();


	return (
		<AbsoluteFill>
      <div className='w-full h-full flex justify-center align-center'>
        <Img style={{height: 512, width: 512}} src={staticFile('images/greeting.png')}/>
      </div>
		</AbsoluteFill>
	);
};
