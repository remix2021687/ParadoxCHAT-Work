import { HeartIcon, ChatIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";

export type PostBoxProps = {
	id?: string;
	title: string;
	media_content: string;
	content: string;
	like_count: number;
	is_liked: boolean;
	user: {
		first_name: string;
		last_name: string;
		avatar: string;
		username: string;
		is_verified: boolean;
	};
	created_at: string;
};

export const PostBox: React.FC<PostBoxProps> = ({
	title,
	content,
	media_content,
	like_count,
	is_liked,
	user,
	created_at,
}) => {
	return (
		<section className='PostBox'>
			<img src={media_content} alt='media' />

			<section className='PostBox_content'>
				<section className='PostBox_header'>
					<img src={user.avatar} alt='avatar' />
					<section>
						<h2>
							{user.first_name} {user.last_name}
						</h2>
						<h4>
							@{user.username} • {created_at} ago
						</h4>
					</section>
				</section>
				<h1>{title}</h1>
				<p>{content}</p>
				<hr />
				<section className='PostBox_footer'>
					<section className='PostBox_footer_left'>
						<section>
							{is_liked ? (
								<HeartIcon size={30} fill='red' weight='fill' />
							) : (
								<HeartIcon size={30} color='#AD92C9' />
							)}
							<h4>{like_count}</h4>
						</section>
						<section>
							<ChatIcon size={30} color='#AD92C9' />
						</section>
					</section>
					<NavLink to={"/"}>Watch Now</NavLink>
				</section>
			</section>
		</section>
	);
};
