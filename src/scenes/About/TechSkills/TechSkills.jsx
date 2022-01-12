import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
  // DiMongodb,
  // DiSass,
  DiGit,
  DiJqueryLogo,
  DiDatabase,
  DiHtml5,
  DiCss3,
  DiJava,
  DiVisualstudio
} from 'react-icons/di';
import {
  // SiTypescript,
  // SiRedux,
  // SiSocketDotIo,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <DiJqueryLogo />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <DiDatabase />
      </li>
      <li className={s.techIcon}>
        <DiVisualstudio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
