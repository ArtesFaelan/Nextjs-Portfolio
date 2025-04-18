import Link from "next/link";

import {
  RiGithubLine,
  RiTelegramFill,
  RiDiscordFill
} from "react-icons/ri";

export const socialData = [
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
  {
    name: "Discord",
    link: "https://discord.com",
    Icon: RiDiscordFill,
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
          className={`${"bg-accent rounded-full p-[10px] hover:text-white"
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
