import clsx from "clsx";
import { useTranslation } from "react-i18next";
import type { Project } from "../lib/types";
import LinkPill from "./LinkPill";
import GithubLogo from "./icons/GithubLogo";
import LinkIcon from "./icons/LinkIcon";

const Project = ({ title, description, link, github, img, tags }: Project) => {
  const { t } = useTranslation();
  return (
    <article className="flex flex-col lg:flex-row gap-y-8 md:gap-x-8">
      <img
        className={clsx(
          "rounded-xl h-48 w-64 lg:h-64 lg:w-80 transition duration-300",
          "border-rose-800 dark:border-rose-400 border-[0.5px] ease-in",
          "hover:scale-[1.02] hover:translate-x-[2px] hover:-translate-y-[2px]",
          "hover:border-[1px]",
          "hover:shadow-xl hover:shadow-red-600/20 hover:dark:shadow-red-800"
        )}
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-between gap-y-4 items-start">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl">{title}</h3>
          <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
            {tags.map((tag) => (
              <li
                className={clsx(
                  tag.class,
                  "flex items-center gap-x-1",
                  "px-2 py-1 h-10 rounded-xl",
                )}
                key={tag.name}
              >
                <span>{tag.name}</span>
                {tag.icon}
              </li>
            ))}
          </ul>
        </div>
        <p className="lg:w-80">{t(description)}</p>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          {github && (
            <LinkPill label="Github" href={github}>
              <GithubLogo />
            </LinkPill>
          )}
          {link && (
            <LinkPill label="Link to webpage" href={link}>
              <LinkIcon />
            </LinkPill>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
