import Bootstrap from "./BootstrapIcon";
import CSSIcon from "./CSSIcon";
import Django from "./DjangoIcon";
import DockerIcon from "./DockerIcon";
import Expressjs from "./ExpressIcon";
import HTML5 from "./HTMLIcon";
import JSIcon from "./JSIcon";
import Nextjs from "./NextJsIcon";
import NginxIcon from "./NginxIcon";
import Nodejs from "./NodeJSIcon";
import PostgreSQLIcon from "./PostgreSQLIcon";
import JetBrainsPyCharm from "./PycharmIcon";
import PythonIcon from "./PythonIcon";
import ReactIcon from "./ReactIcon";
import Redux from "./ReduxIcon";
import TailwindCSS from "./TailwindIcon";
import TraefikIcon from "./TraefikIcon";
import TSIcon from "./TSIcon";
import ViteIcon from "./ViteIcon";
import VitestIcon from "./VitestIcon";
import VSCodeIcon from "./VSCodeIcon";

export enum Icons {
  Django,
  Docker,
  Postgres,
  Nextjs,
  Traefik,
  Nginx,
  NodeJS,
  ExpressJS,
  React,
  Redux,
  Tailwind,
  Bootstrap,
  Python,
  Javascript,
  HTML,
  CSS,
  Typescript,
  VSCode,
  Pycharm,
  Vite,
  ViteTest,
}

const Icon = ({ name }: { name: Icons }) => {
  if (name == Icons.Django) {
    return (
      <Django className="icon-style bg-emerald-700/40 hover:bg-emerald-800/60 dark:bg-emerald-500/40 hover:dark:bg-emerald-500/60" />
    );
  }
  if (name == Icons.Docker) {
    return (
      <DockerIcon className="icon-style bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-500/40 hover:dark:bg-sky-500/60" />
    );
  }
  if (name == Icons.Postgres) {
    return (
      <PostgreSQLIcon className="icon-style bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-500/40 hover:dark:bg-sky-500/60" />
    );
  }
  if (name == Icons.Nextjs) {
    return (
      <Nextjs className="icon-style bg-black/40 hover:bg-black/60 dark:bg-black/40 hover:dark:bg-black/60" />
    );
  }

  if (name == Icons.Traefik) {
    return (
      <TraefikIcon className="icon-style bg-blue-700/40 hover:bg-blue-800/60 dark:bg-blue-500/40 hover:dark:bg-blue-500/60" />
    );
  }

  if (name == Icons.Nginx) {
    return (
      <NginxIcon className="icon-style bg-emerald-700/40 hover:bg-emerald-800/60 dark:bg-emerald-500/40 hover:dark:bg-emerald-500/60" />
    );
  }

  if (name == Icons.React) {
    return (
      <ReactIcon className="icon-style bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-400/40 hover:dark:bg-sky-500/60" />
    );
  }

  if (name == Icons.Tailwind) {
    return (
      <TailwindCSS className="icon-style bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-400/40 hover:dark:bg-sky-500/60" />
    );
  }

  if (name == Icons.Bootstrap) {
    return (
      <Bootstrap className="icon-style bg-indigo-700/40 hover:bg-indigo-800/60 dark:bg-indigo-500/40 hover:dark:bg-indigo-500/80" />
    );
  }

  if (name == Icons.Redux) {
    return (
      <Redux className="icon-style bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-400/40 hover:dark:bg-sky-500/60" />
    );
  }

  if (name == Icons.Python) {
    return (
      <PythonIcon className="icon-style bg-yellow-700/40 hover:bg-yellow-800/60 dark:bg-yellow-400/40 hover:dark:bg-yellow-500/60" />
    );
  }

  if (name == Icons.Javascript) {
    return (
      <JSIcon className="icon-style bg-yellow-700/40 hover:bg-yellow-800/60 dark:bg-yellow-400/40 hover:dark:bg-yellow-500/60" />
    );
  }

  if (name == Icons.Typescript) {
    return (
      <TSIcon className="icon-style bg-blue-700/40 hover:bg-blue-800/60 dark:bg-blue-400/40 hover:dark:bg-blue-500/60" />
    );
  }

  if (name == Icons.HTML) {
    return (
      <HTML5 className="icon-style bg-orange-700/40 hover:bg-orange-800/60 dark:bg-orange-400/40 hover:dark:bg-orange-500/60" />
    );
  }

  if (name == Icons.CSS) {
    return (
      <CSSIcon className="icon-style bg-fuchsia-700/40 hover:bg-fuchsia-800/60 dark:bg-fuchsia-400/40 hover:dark:bg-fuchsia-500/60" />
    );
  }

  if (name == Icons.NodeJS) {
    return (
      <Nodejs className="icon-style bg-emerald-400/40 hover:bg-emerald-800/60 dark:bg-emerald-500/40 hover:dark:bg-emerald-500/60" />
    );
  }

  if (name == Icons.ExpressJS) {
    return (
      <Expressjs className="icon-style bg-gray-700/40 hover:bg-gray-800/60 dark:bg-gray-500/40 hover:dark:bg-gray-500/60" />
    );
  }

  if (name == Icons.VSCode) {
    return (
      <VSCodeIcon className="icon-style bg-sky-700/40 hover:bg-sky-800/60 dark:bg-sky-500/40 hover:dark:bg-sky-500/60" />
    );
  }

  if (name == Icons.Pycharm) {
    return (
      <JetBrainsPyCharm className="icon-style bg-yellow-700/40 hover:bg-yellow-800/60 dark:bg-yellow-500/40 hover:dark:bg-yellow-500/60" />
    );
  }

  if (name == Icons.Vite) {
    return (
      <ViteIcon className="icon-style bg-green-300/50 hover:bg-green-800/60 dark:bg-green-500/40 hover:dark:bg-green-500/60" />
    );
  }

  if (name == Icons.ViteTest) {
    return (
      <VitestIcon className="icon-style bg-green-300/50 hover:bg-green-800/60 dark:bg-green-500/40 hover:dark:bg-green-500/60" />
    );
  }
};

export default Icon;
