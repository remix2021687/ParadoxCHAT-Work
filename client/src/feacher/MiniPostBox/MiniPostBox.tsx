export type MiniPostBoxProps = {
	media: string;
	name: string;
	created_at: string;
};

export const MiniPostBox: React.FC<MiniPostBoxProps> = ({
	media,
	name,
	created_at,
}) => {
	return (
		<section className='MinePostBox'>
			<img src={media} alt='media' />
			<section className='MinePostBox_info'>
				<h1>{name}</h1>
				<span>120k • {created_at} mo ago</span>
			</section>
		</section>
	);
};
