import { Link } from "react-router-dom";
import Layout from "../Layout";
import StackBento from "./StackBento";
import Icon, { Icons } from "./icons/IconSet";
import StackIcon from "./icons/StackIcon";
import { useTranslation } from "react-i18next";

const Stack = () => {
  const { t } = useTranslation()
  return (
    <Layout className="flex flex-col gap-y-8 px-16 text-slate-900 dark:text-slate-300 mt-20">
      <p
        id="tech-stack"
        className="flex items-center gap-x-2 text-xl md:text-2xl lg:text-4xl font-bold tracking-wide"
      >
        <StackIcon className="size-8" /> {t("STACK.TITLE")}
      </p>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-3 z-0">
        <StackBento title={t("STACK.BACKEND")}>
          <Icon name={Icons.Django} />
          <Icon name={Icons.Docker} />
          <Icon name={Icons.Postgres} />
          <Icon name={Icons.Nextjs} />
          <Icon name={Icons.Nginx} />
          <Link to="https://traefik.com">
            <Icon name={Icons.Traefik} />
          </Link>
        </StackBento>
        <StackBento title={t("STACK.FRONTEND")}>
          <Icon name={Icons.React} />
          <Icon name={Icons.Redux} />
          <Icon name={Icons.Bootstrap} />
          <Icon name={Icons.Tailwind} />
          <Icon name={Icons.Nextjs} />
          <div></div>
        </StackBento>
        <StackBento title={t("STACK.LANGUAGES")}>
          <Icon name={Icons.Python} />
          <Icon name={Icons.Javascript} />
          <Icon name={Icons.Typescript} />
          <Icon name={Icons.HTML} />
          <Icon name={Icons.CSS} />
          <div></div>
        </StackBento>
        <StackBento title={t("STACK.INSTRUMENTS")}>
          <Icon name={Icons.VSCode} />
          <Icon name={Icons.Pycharm} />
          <Icon name={Icons.Vite} />
          <Icon name={Icons.ViteTest} />
          <div></div>
          <div></div>
        </StackBento>
        <StackBento title={t("STACK.STUDY")}>
          <Icon name={Icons.NodeJS} />
          <Icon name={Icons.ExpressJS} />
          <Icon name={Icons.Nextjs} />
          <div></div>
          <div></div>
          <div></div>
        </StackBento>
      </div>
    </Layout>
  );
};

export default Stack;
