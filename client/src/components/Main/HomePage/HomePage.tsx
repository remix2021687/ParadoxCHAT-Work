import { useEffect } from "react";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { PostMenu } from "./components/PostMenu/PostMenu";
import { RecomendationComponents } from "./components/RecomendationComponents/RecomendationComponents";
import { TrendTopic } from "./components/RecomendationComponents/components/TrendTopic/TrendTopic";

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
			<section className="HomePage_left">
				<RecomendationComponents />
				<TrendTopic />
			</section>
		</section>
	);
};
