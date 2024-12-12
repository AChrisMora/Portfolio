import { Link } from 'react-router-dom'

const ContactMe = () => {
  return (
    <section className="justify-content-center mx-auto text-center" style={{ width: '50%' }}>
      <h3>Temporary Contact</h3>
      <p>
        I plan to implement an API to send me your info soon tm. For now, here's
        my github and gmail.
      </p>
      <ul>
        <li>
          <p>
            Github - <Link to="https://github.com/AChrisMora">AchrisMora</Link>
          </p>
        </li>
        <li>
          <p>achrismora@gmail.com</p>
        </li>
      </ul>
    </section>
  );
};

export default ContactMe;
