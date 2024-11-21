import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  title: string;
  colSpan?: string;
  rowSpan?: string;
  children: ReactNode;
};

const StackBento = ({ title, rowSpan, colSpan, children }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-2 h-96 w-full p-6",
        "rounded-xl",
        "bg-red-800/20",
        "transition duration-300",
        "hover:shadow-xl hover:shadow-red-600/20 hover:dark:shadow-red-800",

        rowSpan,
        colSpan,
      )}
    >
      <p className="inline-flex self-start bg-red-950/20 dark:bg-red-700/40 px-2 py-1 rounded-lg">
        {title}
      </p>
      <div
        className={clsx(
          "grid grid-cols-[repeat(auto-fit,minmax(32px,1fr))]",
          "lg:grid-cols-[repeat(auto-fit,minmax(48px,1fr))] grid-rows-5 gap-2",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default StackBento;
