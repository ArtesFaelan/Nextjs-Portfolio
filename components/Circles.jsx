import Image from "next/image";
import circles from "../public/circles.png";
const Circles = () => {
	return (
		<div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
			<Image
				src={circles}
				alt="circles"
				width={260}
				height={200}
				className="w-full h-full"
			/>
		</div>
	);
};

export default Circles;
