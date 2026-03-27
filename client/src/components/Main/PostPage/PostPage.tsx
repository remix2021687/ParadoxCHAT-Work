import { NavLink } from "react-router";
import { SealCheckIcon } from "@phosphor-icons/react";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import video from "@assets/video/282086.mp4";
import avatar from "@assets/img/avatar.png";
import { PostInfo } from "./components/PostInfo/PostInfo";

export const PostPage: React.FC = () => {
	return (
		<section className='PostPage'>
			<NavLink to={"/"}>Back to Feed</NavLink>
			<section className='PostPage_content'>
				<section className='PostPage_content_videoPlayer'>
					<VideoPlayer src={video} />
				</section>
				<PostInfo />
			</section>
			<NavLink to={"/"}>Back to Feed</NavLink>
		</section>
	);
};
