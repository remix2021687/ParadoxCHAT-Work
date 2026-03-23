import { HouseIcon } from "@phosphor-icons/react";

export const NavigationMenu: React.FC = () => {
	return (
		<section className="NavigationMenu">
			<section className="NavigationMenu_header">
				<h2>Navigation</h2>
				<p>Your digital workspace</p>
			</section>
			<section className="NavigationMenu_buttons">
				<button>
					<section>
						<HouseIcon
							weight="bold"
							color="white"
							className="NavigationMenu_buttons_icon"
						/>
						<span>Test</span>
					</section>
					<span className="NavigationMenu_buttons_indecator"></span>
				</button>
				<button>Test</button>
				<button>Test</button>
				<button>Test</button>
				<button>Test</button>
			</section>
		</section>
	);
};
