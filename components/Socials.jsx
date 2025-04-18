import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTelegramFill
} from "react-icons/ri";

export const socialData = [
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com",
  //   Icon: RiYoutubeLine,
  // },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com",
  //   Icon: RiInstagramLine,
  // },
  // {
  //   name: "Facebook",
  //   link: "https://facebook.com",
  //   Icon: RiFacebookLine,
  // },
  // {
  //   name: "Dribbble",
  //   link: "https://dribbble.com",
  //   Icon: RiDribbbleLine,
  // },
  {
    name: "Telegram",
    link: "https://web.telegram.org/k/#@flyingavius",
    Icon: RiTelegramFill,
  },
  {
    name: "Github",
    link: "https://github.com/ArtesFaelan",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          // className={`${
          //   social.name === "Github"
          //     ? "bg-accent rounded-full p-[10px] hover:text-white"
          //     : "hover:text-accent"
          // } transition-all duration-300`}
          className={`${
            social.name === "Github" || social.name === "Telegram"
              ? "bg-accent rounded-full p-[10px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
