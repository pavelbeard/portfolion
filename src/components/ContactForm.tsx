import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";
import ContactMeIcon from "./icons/ContactMeIcon";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Layout className="flex flex-col text-slate-900 dark:text-slate-300 px-16 mt-20">
      <p
        id="contacts"
        className="flex items-center gap-x-2 text-xl md:text-2xl lg:text-4xl font-bold tracking-wide"
      >
        <ContactMeIcon className="size-8" /> {t("CONTACT_ME.TITLE")}
      </p>
      <form
        className="flex flex-col gap-y-4 mt-8"
        action="mailto:heavycream9090@icloud.com"
      >
        <label
          className="inline-flex self-start flex-col gap-y-2 text-md md:text-lg xl:text-xl"
          htmlFor="subject"
        >
          {t("CONTACT_ME.SUBJECT")}:
          <input
            className="p-4 rounded-lg outline-none focus:outline-indigo-400 bg-slate-100/50"
            id="subject"
            name="subject"
            type="text"
          />
        </label>
        <label
          className="inline-flex flex-col gap-y-2 text-md md:text-lg xl:text-xl"
          htmlFor="body"
        >
          {t("CONTACT_ME.BODY")}:
          <textarea
            className="p-4 rounded-lg outline-none focus:outline-indigo-400 bg-slate-100/50"
            name="body"
            id="body"
          ></textarea>
        </label>
        <button
          className={clsx(
            "inline-flex self-start items-center gap-x-2",
            "p-4 rounded-lg bg-slate-100/50 dark:bg-slate-100/20",
            "text-md md:text-lg xl:text-xl",
            "focus:outline-indigo-400",
            "hover:bg-slate-100/90 dark:hover:bg-slate-100/40 ",
          )}
        >
          <ContactMeIcon className="size-6" /> {t("CONTACT_ME.SEND")}
        </button>
      </form>
    </Layout>
  );
};

export default ContactForm;