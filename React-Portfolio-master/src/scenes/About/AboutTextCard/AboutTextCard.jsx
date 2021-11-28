import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, This is{' '}
        <span className={s.purple}>Vaibhav Rawat </span>
        from <span className={s.purple}> Ahmedabad, Gujarat.</span>
        <br />
        Skilled Java FullStack and Web Developer.
        <br /> Bachelor in Computer Engineering from
        <br />
        Government Engineering College Gandhinagar.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Music
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
