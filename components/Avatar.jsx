import Image from "next/image";
import avatar from "../public/avatar_dark_man.png";
const Avatar = () => {
	return (
		<div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
			<Image
				src={avatar}
				alt="avatar"
				width={737}
				height={678}
				className="translate-z-0 w-full h-full"
			/>
		</div>
	);
};

export default Avatar;
