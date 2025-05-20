import {
    FaCss3,
    FaFigma,
    FaHtml5,
    FaJs,
    FaReact,
    FaPython,
    FaJava,
    FaVuejs,
    FaPhp,
    FaLaravel
  } from "react-icons/fa";
  import {
    SiAdobephotoshop,
    SiNextdotjs,
    SiDjango,
    SiSpringboot,
    SiTypescript,
    SiFlask,
    SiSupabase,
    SiFirebase,
    SiGooglecloud,
    SiAzuredevops,
    SiAmazonaws,
    SiGrafana,
    SiZapier,
    SiStripe,
    SiPaypal,
    SiAutomattic,
    SiChatbot,
    SiOpenai,
    SiGooglesheets,
    SiAirtable,
    SiGoogleanalytics,
    SiEthereum,
    SiSolidity,
    SiWeb3Dotjs,
    SiBlockchaindotcom
  } from "react-icons/si";

const simpleInfo = {
    years: 6
}

const contentKeys = {
    name: "Lorenzo S.",
    indexIntro : `I'm a passionate software developer specializing in crafting dynamic Full Stack Web Applications and leveraging No-Code/Low-Code solutions to bring innovative web and app experiences to life.With six years of experience, honed skills, and exceptional communication, I'm here to turn your dreams into reality. 
                    Don't hesitate to reach out—your vision is just a conversation away!`,
    aboutContent : simpleInfo.years + ` years ago, I begin freelancing as a developer. Since then, I've
                    done remote work for agencies, consulted for startups, and
                    collabrated on digital products for business and consumer use.`,
    aboutYears : simpleInfo.years,
    aboutClients : 15,
    aboutFinishedProjects : 25,
    aboutWinningAward: 6,
    serviceIntro : "These are what I can offer you !",
    workIntro: `Here are my past works. Please enjoy by visiting those.`
}

export const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web",
          icons: [
            FaHtml5,
            FaCss3,
            FaJs,
            SiTypescript,
            FaPython,
            FaPhp,
            FaReact,
            FaVuejs,
            SiNextdotjs,
            SiDjango,
            SiSpringboot,
            SiFlask,
            FaJava,
            FaLaravel
          ],
        },
        
        {
          title: "Cloud Platforms",
          icons: [
            SiSupabase,
            SiFirebase,
            SiGooglecloud,
            SiAzuredevops,
            SiAmazonaws,
            SiGoogleanalytics,
            SiGrafana
        ],
        },
        {
            title: "Blochchain Development",
            icons: [
                SiEthereum,
                SiSolidity,
                SiWeb3Dotjs,
                SiBlockchaindotcom],
          },
        {
            title: "Services",
            icons: [
                SiZapier,
                SiStripe,
                SiPaypal,
                SiAutomattic,
                SiChatbot,
                SiOpenai,
                SiGooglesheets,
                SiAirtable
            ],
          },
        
        // {
        //     title: "UI/UX Design",
        //     icons: [FaFigma, SiAdobephotoshop],
        //   },
      ],
    },
    {
      title: "awards",
      info: [
        {
          title: "Python Developer Award - Honoree",
          stage: "2018 - 2019",
        },
        {
          title: "Java Developer Award - HackerRank",
          stage: "2017 - 2018",
        },
        // {
        //   title: "Adobe Design Achievement Awards - Finalist",
        //   stage: "2009 - 2010",
        // },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "Software Engineer (Java) - Aveva",
          stage: "2023 - 2024",
        },
        {
          title: "Software Developer - Akido Labs",
          stage: "2018 - 2023",
        },
        {
          title: "Intern - Grifin Corporation",
          stage: "2017 - 2018",
        },
      ],
    },
    // {
    //   title: "credentials",
    //   info: [
    //     {
    //       title: "Web Development - ABC University, LA, CA",
    //       stage: "2011",
    //     },
    //     {
    //       title: "Computer Science Diploma - AV Technical Institute",
    //       stage: "2009",
    //     },
    //     {
    //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
    //       stage: "2006",
    //     },
    //   ],
    // },
  ];


export default contentKeys;