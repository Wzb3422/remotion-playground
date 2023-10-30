import {
	AbsoluteFill,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
  Img,
  staticFile,
	Audio,
} from 'remotion';
import { Dialogue } from './Dialogue';
import { duplicatedMangaList } from './config';

export const Image: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const renderSequences = () => {
		let currentFrames = 0;

		return duplicatedMangaList.map(page => {
			const tailingDelay = 10;
			const duration = page.dialogues.reduce((acc, cur) => acc + cur.audio.delay + cur.audio.durationInFrames + tailingDelay, 0);
			let dialogueDelay = 0;

			const { height: imgHeight, width: imgWidth, path: imgPath } = page.image;

			const jsx =  <>
				<Sequence from={currentFrames} durationInFrames={duration}>
					<div className='w-full h-full flex justify-center align-center relative'>
						<Img style={{height: imgHeight, width: imgWidth}} src={staticFile(imgPath)}/>
						{page.dialogues.map(item => {
							const result = (<>
								<Dialogue left={item.position.left} top={item.position.top} text={item.text} />
								<Sequence from={item.audio.delay + dialogueDelay} durationInFrames={item.audio.durationInFrames}>
									<Audio src={staticFile(item.audio.path)} />
								</Sequence>
							</>);
							dialogueDelay += item.audio.delay + item.audio.durationInFrames;
							return result;
						})}
					</div>
				</Sequence>
			</>

			currentFrames += duration;

			return jsx;
		});;
	}

	return (
		<AbsoluteFill>
			{renderSequences()}
		</AbsoluteFill>
	);
};
