import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";

// Dynamically mapping through projects

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Melvoid Photography",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20583168-Fashion-website",
  },
  {
    id: 2,
    image: IMG2,
    title: "Melvoid Photography",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20583168-Fashion-website",
  },
  {
    id: 3,
    image: IMG3,
    title: "Melvoid Photography",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20583168-Fashion-website",
  },
  {
    id: 4,
    image: IMG4,
    title: "Melvoid Photography",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20583168-Fashion-website",
  },
  {
    id: 5,
    image: IMG5,
    title: "Melvoid Photography",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20583168-Fashion-website",
  },
  {
    id: 6,
    image: IMG6,
    title: "Melvoid Photography",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20583168-Fashion-website",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
