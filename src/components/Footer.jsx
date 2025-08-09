import {
  BsEnvelopeAt,
  BsTwitterX,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
const Footer = () => {
  return (
    <section className="wrapper LG bg-retroBlue dark:bg-retroBlue-2 py-5 text-center">
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between">
        <div className="mb-5">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <BsEnvelopeAt className="text-2xl font-bold" />
            <p>joseph.john33@yahoo.com</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <FaRegCopyright />
            <p className="font-bold">
              2025 Joseph's Portfolio{" "}
              <span className="text-sm font-normal">All Rights Reserved</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row items-center">
          <p className="lg:border-r-2 lg:pr-3">Reach me out</p>
          <div className="flex justify-center gap-4 text-3xl">
            <a href="https://X.com/JOHAN_THE_13th">
              <BsTwitterX />
            </a>
            <a href="https://www.instagram.com/johan.the.13th/?__pwa=1">
              <BsInstagram />
            </a>
            <a href="https://github.com/JOHANJAY">
              <VscGithubInverted />
            </a>
            <a href="https://www.linkedin.com/in/john-joseph-120752251/">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
