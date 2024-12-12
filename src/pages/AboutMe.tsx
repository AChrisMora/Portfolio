import portrait from '../assets/me.jpg'

const AboutMe = () => {
  return (
    <section className="justify-content-center mx-auto text-center" style={{ width: '50%' }}>
      <h3>About Me</h3>
      <img src={portrait} alt="Self Portrait" />
      <p>
        Hello! I'm Alexander. Although I'm still new to the world of coding,
        it's been really fun learning all this new tech. I'm an upcoming web
        developer from Dallas. I'm just about 21 years old. I'm really into
        fighting games and I'm hoping to use my new found knowledge to make my
        own games on the side as well. I'll make sure to add them to this
        portfolio, so stay tuned!
      </p>
    </section>
  );
};

export default AboutMe;
