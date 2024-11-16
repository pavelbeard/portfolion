import { ReactNode } from "react";

const Experience = ({
  jobLabel,
  placeOfWork,
  period,
  children,
}: {
  jobLabel: string;
  placeOfWork: string;
  period: string;
  children: ReactNode;
}) => {
  return (
    <article className="text-slate-900 dark:text-slate-300">
      <div className="flex flex-col gap-y-2 text-lg md:text-xl lg:text-2xl">
        <p className="font-bold">{jobLabel}</p>
        <p>{placeOfWork}</p>
        <p className="font-light">{period}</p>
      </div>
      <div className="mt-2">
        {children}
      </div>
    </article>
  );
};

export default Experience;
