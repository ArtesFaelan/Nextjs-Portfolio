import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import contentKeys from "../keys/contents";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tAvt1 from "../public/t-avt-1.png";
import tAvt2 from "../public/t-avt-2.png";
import tAvt3 from "../public/t-avt-3.png";
const testimonialData = [
	{
		image: { tAvt1 },
		name: "Sarah M",
		position: "Customer",
		message:
			"Our sales have increased significantly since the launch, and I attribute much of that success to " +
			contentKeys.name +
			"'s hard work and expertise. I highly recommend him to anyone in need of a talented software developer!",
	},
	{
		image: { tAvt2 },
		name: "Emily K",
		position: "Customer",
		message:
			"Working with " +
			contentKeys.name +
			" on our new web application was a fantastic experience. His communication skills stood out right from the start—he made sure to keep us updated at every stage of the project and was always open to our feedback.",
	},
	{
		image: { tAvt3 },
		name: "Mark T",
		position: "Customer",
		message:
			"Thanks to his dedication and expertise, we delivered our application ahead of schedule, and the user feedback has been overwhelmingly positive. I can't thank " +
			contentKeys.name +
			" enough for his professionalism and hard work. He's a true asset to any project!",
	},
];

const TestimonialSlider = () => {
	return (
		<Swiper
			navigation
			pagination={{
				clickable: true,
			}}
			modules={[Navigation, Pagination]}
			className="h-[400px]"
		>
			{testimonialData.map((person, i) => (
				<SwiperSlide key={i}>
					<div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
						{/* avatar, name, position */}
						<div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
							<div className="flex flex-col justify-center text-center">
								{/* avatar */}
								<div className="mb-2 mx-auto">
									<Image
										src={person.image}
										width={100}
										height={100}
										alt={person.name}
									/>
								</div>

								{/* name */}
								<div className="text-lg">{person.name}</div>

								{/* position */}
								<div className="text-[12px] uppercase font-extralight tracking-widest">
									{person.position}
								</div>
							</div>
						</div>

						{/* quote & message */}
						<div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
							{/* quote icon */}
							<div className="mb-4">
								<FaQuoteLeft
									className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
									aria-aria-hidden
								/>
							</div>

							{/* message */}
							<div className="xl:text-lg text-center md:text-left">
								{person.message}
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TestimonialSlider;
