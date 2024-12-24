import clsx from "clsx";
import { useTranslation } from "react-i18next";
import carteraCapture from "../assets/projects/cartera.webp";
import timsheeCapture from "../assets/projects/timshee.webp";
import Layout from "../Layout";
import { NamedTag, type Project } from "../lib/types";
import Experience from "./Experience";
import BootstrapIcon from "./icons/BootstrapIcon";
import ChecklistIcon from "./icons/ChecklistIcon";
import DjangoIcon from "./icons/DjangoIcon";
import FlaskIcon from "./icons/FlaskIcon";
import NextJsIcon from "./icons/NextJsIcon";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TSIcon from "./icons/TSIcon";
import ProjectComponent from "./Project";

const TAGS: NamedTag = {
  REACT: {
    name: "React",
    class:
      "bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-400/40 hover:dark:bg-sky-500/60",
    icon: <ReactIcon />,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class:
      "bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-400/40 hover:dark:bg-sky-500/60",
    icon: <TailwindIcon />,
  },
  DJANGO: {
    name: "Django",
    class:
      "bg-emerald-700/40 hover:bg-emerald-800/60 dark:bg-emerald-500/40 hover:dark:bg-emerald-500/60",
    icon: <DjangoIcon />,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class:
      "bg-indigo-700/40 hover:bg-indigo-800/60 dark:bg-indigo-500/40 hover:dark:bg-indigo-500/80",
    icon: <BootstrapIcon />,
  },
  NEXTJS: {
    name: "Next.js",
    class:
      "bg-black/40 hover:bg-black/60 dark:bg-black/40 hover:dark:bg-black/60",
    icon: <NextJsIcon />,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class:
      "bg-blue-700/40 hover:bg-blue-800/60 dark:bg-blue-400/40 hover:dark:bg-blue-500/60",
    icon: <TSIcon className="size-4" />,
  },
};

const PROJECTS: Project[] = [
  {
    title: "Timshee.ru",
    description: "MAIN_CONTENT_TIMSHEE_DSCR",
    link: "https://timshee.ru",
    github: "https://github.com/pavelbeard/timshee",
    img: timsheeCapture,
    tags: [TAGS.DJANGO, TAGS.REACT, TAGS.TAILWIND],
  },
  // {
  //   title: "Dashboard",
  //   description:
  //     "That project was growth from an idea, which was requiring to build a dashboard for a system of videoconferencing. So, here is it.",
  //   // link: "https://heavycream.es",
  //   github: "https://github.com/pavelbeard/iva_dashboard_new",
  //   img: timsheeCapture,
  //   tags: [TAGS.DJANGO, TAGS.REACT, TAGS.BOOTSTRAP],
  // },
  {
    title: "Password Manager | Cartera",
    description: "MAIN_CONTENT_WALLET_DSCR",
    link: "https://cusec.es",
    github: "https://github.com/pavelbeard/wallet",
    img: carteraCapture,
    tags: [TAGS.DJANGO, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.TYPESCRIPT],
  },
];

const MainContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Layout id="experience" className="flex flex-col gap-y-8 px-16 mt-20">
        <div
          className={clsx(
            "font-bold flex items-center gap-x-2 text-xl md:text-2xl lg:text-4xl",
            "text-red-600 drop-shadow-xl",
          )}
        >
          <FlaskIcon className="size-8" /> {t("MAIN_CONTENT.EXPERIENCE")}
        </div>
        <Experience
          jobLabel={t("MAIN_CONTENT.FULLSTACK")}
          placeOfWork="Timshee.ru"
          period={t("MAIN_CONTENT.PERIOD_2")}
        >
          <p>{t("MAIN_CONTENT.COMPANY_2.DSCR_1")}</p>
          <p>{t("MAIN_CONTENT.COMPANY_2.DSCR_2")} </p>
        </Experience>
        <Experience
          jobLabel={t("MAIN_CONTENT.FULLSTACK")}
          placeOfWork={t("MAIN_CONTENT.COMPANY_1")}
          period={t("MAIN_CONTENT.PERIOD_1")}
        >
          <p>{t("MAIN_CONTENT.COMPANY_1.DSCR_1")}</p>
          <p>{t("MAIN_CONTENT.COMPANY_1.DSCR_2")}</p>
          <p>{t("MAIN_CONTENT.COMPANY_1.DSCR_3")}</p>
        </Experience>
      </Layout>
      <Layout id="projects" className="flex flex-col gap-y-8 px-16 mt-20">
        <div className="font-bold flex items-center gap-x-2 text-red-600 drop-shadow-xl text-xl md:text-2xl lg:text-4xl">
          <ChecklistIcon className="size-8" /> {t("MAIN_CONTENT.PROJECTS")}
        </div>
        <div className="flex flex-col gap-y-16 text-slate-900 dark:text-slate-300">
          {PROJECTS.map((project, index) => (
            <ProjectComponent key={index} {...project} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default MainContent;
