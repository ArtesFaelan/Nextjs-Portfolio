import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import {
  RiGithubLine,
  RiTelegramFill,
  RiGameFill,
  RiDiscordFill
} from "react-icons/ri";


export const contactData = [
  {
    name: "Telegram",
    link: "https://web.telegram.org/k/#@flyingavius",
    content: "@flyingavius",
    Icon: RiTelegramFill,
  },
  {
    name: "Github",
    link: "https://github.com/QistalKai",
    content : "@QistalKai",
    Icon: RiGithubLine,
  },
  {
    name: "Mail",
    link: "https://gmail.com",
    content : "bvtalk0905.dev@gmail.com",
    Icon: RiGameFill,
  },
  {
    name: "Discord",
    link: "https://discord.com",
    content : "@artes620",
    Icon: RiDiscordFill,
  },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            <div class="flex flex-col gap-y-8 row mb-10">
              {contactData.map((contact, i) => {
                return (
                  <div className="w-full md:w-3/4 flex text-xl">
                    <div className="flex justify-start w-full text-center gap-x-5">
                      
                      <div className="bg-accent rounded-full p-[10px] hover:text-white"><contact.Icon aria-hidden /></div>
                      <div className="text">
                        <p>
                          <span>{contact.name}:</span> <a className="text-blue-500 hover:underline">{contact.content}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
						</div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
