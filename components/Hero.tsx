import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div>
        <p>Hi, my name is</p>
        <h1>
          Simon Lange.
          <br />I build things for the web.
        </h1>
        <p>
          I'm front-end developer specializing in building (and sometimes designing) incredible digital experiences. Currently, I'm employed at{" "}
          <a className="text-light-primary dark:text-dark-primary" href="https://bellcom.dk" target="_blank" rel="noopener noreferrer">
            Bellcom ApS.
          </a>{" "}
          My primarily focus is to build accessible, great designed products. Always up for a talk, so hit me up.
        </p>
      </div>
    </div>
  );
};

export default Hero;
