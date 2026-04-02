import { ProfileInfoHeader } from "./components/ProfileInfoHeader/ProfileInfoHeader";

interface ProfileInfoProps {
	ProfilePonorama: React.ComponentType;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
	ProfilePonorama,
}) => {
	return (
		<section className='ProfileInfo'>
			<ProfilePonorama />
			<ProfileInfoHeader />
			<section className='ProfileInfo_content'></section>
		</section>
	);
};
