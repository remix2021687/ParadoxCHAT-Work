import "@videojs/react/video/skin.css";
import { createPlayer, videoFeatures } from "@videojs/react";
import { VideoSkin, Video } from "@videojs/react/video";

const Player = createPlayer({ features: videoFeatures });

interface PlayerProps {
	src: string;
}

export const VideoPlayer: React.FC<PlayerProps> = ({ src }) => {
	return (
		<Player.Provider>
			<VideoSkin>
				<Video src={src} playsInline />
			</VideoSkin>
		</Player.Provider>
	);
};
