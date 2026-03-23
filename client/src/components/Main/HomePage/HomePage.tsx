import { useEffect } from "react";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Paradox | Home";
	}, []);

	return (
		<section className="HomePage">
			<NavigationMenu />
		</section>
	);
};
