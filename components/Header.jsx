import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
	return (
		<header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
					{/* logo */}
					<Link href="/">
						<div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
							Lorenzo S.
						</div>
					</Link>

					{/* socials */}
					<Socials />
				</div>
			</div>
		</header>
	);
};

export default Header;
