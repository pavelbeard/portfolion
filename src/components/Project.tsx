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
      <div
        className={clsx(
          "max-lg:self-start group overflow-clip rounded-xl",
          "transition duration-300 hover:-translate-y-[0.7px] hover:translate-x-[0.7px]",
        )}
      >
        <img
          className={clsx(
            "object-cover",
            "h-48 w-64 lg:h-64 lg:w-80 transition duration-300 ease-in",
            "group-hover:scale-[1.02] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]",
            "group-hover:shadow-xl group-hover:shadow-red-600/20 group-hover:dark:shadow-red-800",
          )}
          src={img}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-y-4 items-start">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-md md:text-lg lg:text-xl">{title}</h3>
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
        <p className="flex-grow text-sm lg:max-w-[480px]">{t(description)}</p>
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
