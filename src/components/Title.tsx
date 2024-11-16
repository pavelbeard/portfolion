import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";
import myFace from "../assets/my-face.jpeg";
import Layout from "../Layout";
import LinkedIn from "./icons/LinkedIn";
import Mail from "./icons/Mail";
import LinkPill from "./LinkPill";

const Title = () => {
  const [text, setText] = useState("PAVELBEARD");
  const { t } = useTranslation();
  const { ref, replay } = useScramble({
    playOnMount: false,
    text: text,
    speed: 0.18,
    tick: 2,
    seed: 2,
    scramble: 2,
    step: 4,
    range: [65, 68],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevState) => {
        const nickName = ["HEAVYCREAM", "PAVELBEARD"].at(
          Math.random() < 0.5 ? 0 : 1,
        ) as string;
        if (prevState == nickName) {
          return prevState;
        } else {
          replay();
          return nickName;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="px-16 text-slate-900 dark:text-slate-300 mt-40">
      <div id="title" className="flex flex-col gap-y-4">
        <div className="h-16 lg:h-24 flex items-center gap-x-4 text-md md:text-md lg:text-lg xl:text-xl">
          <img
            className="rounded-full"
            src={myFace}
            alt={t("TITLE.IMG_ALT")}
            width={64}
            height={64}
          />
          <Link
            className={clsx(
              "px-4 py-1 rounded-2xl",
              "bg-slate-100 dark:bg-slate-900",
              "transition duration-300 hover:scale-[1.02] hover:bg-slate-200 hover:text-slate-900",
            )}
            to="https://linkedin.com/in/pavelbeard"
          >
            {t('TITLE.OPEN_TO_WORK')}
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row text-xl md:text-2xl lg:text-4xl">
          <p className="font-bold">{t("TITLE.HELLO")}</p>
          <p ref={ref} className="lg:ml-4 font-bold tracking-widest" />
        </div>
        <div className="text-lg md:text-xl lg:text-2xl">
          <p>{t("TITLE.EXPERIENCE")}</p>
          <p>{t('TITLE.ROLE')}</p>
        </div>
        <div className="flex flex-col w-32 lg:flex-row gap-y-4 lg:gap-x-4">
          <LinkPill label="LinkedIn" href="https://linkedin.com/in/pavelbeard">
            <LinkedIn />
          </LinkPill>
          <LinkPill label="iCloud" href="mailto:heavycream9090@icloud.com">
            <Mail />
          </LinkPill>
        </div>
      </div>
    </Layout>
  );
};

export default Title;
