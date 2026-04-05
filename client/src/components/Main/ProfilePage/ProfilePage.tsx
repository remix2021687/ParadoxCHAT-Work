import {
	ProfilePostBox,
	type ProfilePostBoxProps,
} from "@feacher/ProfilePostBox/ProfilePostBox";
import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo";
import { ProfilePonorama } from "./components/ProfilePonorama/ProfilePonorama";
import bg from "@assets/img/Background.png";

export const ProfilePage: React.FC = () => {
	const ProfilePostData: Array<ProfilePostBoxProps> = [
		{
			media: bg,
			name: "Test",
			views: 50,
			created_at: "5",
		},
		{
			media: bg,
			name: "Test2",
			views: 50,
			created_at: "5",
		},
		{
			media: bg,
			name: "Test3",
			views: 50,
			created_at: "5",
		},
		{
			media: bg,
			name: "Test4",
			views: 50,
			created_at: "5",
		},
	];

	return (
		<section className="ProfilePage">
			<section className="ProfilePage_header">
				<ProfileInfo ProfilePonorama={ProfilePonorama} />
			</section>
			<section className="ProfilePage_content">
				{ProfilePostData.map((data, index) => (
					<ProfilePostBox
						key={index + 1}
						media={data.media}
						name={data.name}
						views={data.views}
						created_at={data.created_at}
					/>
				))}
			</section>
		</section>
	);
};
