import {
	MiniPostBox,
	type MiniPostBoxProps,
} from "@feacher/MiniPostBox/MiniPostBox";
import bg from "@assets/img/Background.png";

export const RecommendationPosts: React.FC = () => {
	const MiniPostBoxData: Array<MiniPostBoxProps> = [
		{
			media: bg,
			name: "Test3",
			created_at: "5",
		},
		{
			media: bg,
			name: "Test5",
			created_at: "6",
		},
		{
			media: bg,
			name: "Test2",
			created_at: "7",
		},
	];
	return (
		<section className='RecommendationPosts'>
			<h2>Related Videos</h2>
			<section className='RecommendationPosts_content'>
				{MiniPostBoxData.map((data, index) => (
					<MiniPostBox
						key={index + 1}
						media={bg}
						name={data.name}
						created_at={data.created_at}
					/>
				))}
			</section>
		</section>
	);
};
