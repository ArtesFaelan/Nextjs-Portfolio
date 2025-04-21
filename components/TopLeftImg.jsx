import Image from "next/image";
import tLeftImage from "../public/top-left-img.png";
const TopLeftImg = () => {
	return (
		<div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 pointer-events-none select-none">
			<Image src={tLeftImage} alt="left cover bg" width={400} height={400} />
		</div>
	);
};

export default TopLeftImg;
