
import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { label: string; href: string; children?: ReactNode };

const LinkPill = ({ label, href, children }: Props) => {
  return (
    <Link
      className={clsx(
        "inline-flex gap-x-2 items-center px-4 py-2",
        "border-[1px] border-rose-800 dark:border-rose-400 rounded-2xl",
        "transition duration-300",
        "hover:bg-rose-800 dark:hover:bg-rose-400",
        "hover:text-slate-300 dark:hover:text-slate-900",
        "max-md:w-32"
      )}
      target="_blank"
      to={href}
    >
      {label}
      {children}
    </Link>
  );
};

export default LinkPill;
