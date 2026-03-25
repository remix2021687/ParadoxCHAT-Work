import { useEffect } from "react";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { PostMenu } from "./components/PostMenu/PostMenu";
import { RecomendationComponents } from "./components/RecomendationComponents/RecomendationComponents";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Paradox | Home";
	}, []);

	return (
		<section className="HomePage">
			<NavigationMenu />
			<section className="HomePage_content">
				<PostMenu />
			</section>
			<RecomendationComponents />
		</section>
	);
};
