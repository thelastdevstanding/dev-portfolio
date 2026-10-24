import { Link } from "react-router";

export function HomePage() {
  return (
    <>
      <img className="avatar" src="https://thelastdevstanding.com/tutorials/css/images/amina-ahmed.jpg" alt="Portrait of Amina Ahmed" />
      <h1>Amina Ahmed</h1>
      <p className="tagline">Junior front-end developer</p>
      <section className="hero" id="top">
        <p>I build accessible web apps for learners and live events.</p>
        <Link to="/projects" className="btn">
          View my work
        </Link>
      </section>
    </>
  );
}