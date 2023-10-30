import {Composition} from 'remotion';
import { Image } from './Manga/Image';
import "./style.css";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Image"
				component={Image}
				durationInFrames={9000} // 5 mins
				fps={30}
				width={768}
				height={512}
			/>
		</>
	);
};
