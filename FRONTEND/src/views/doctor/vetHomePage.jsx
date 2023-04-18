import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import AppHeader from '../header';

var heroData = [
  {
    id: 1,
    image: require("../../assets/images/img-hero1.jpg"),
    title: "Farm animal - Wellness Consultation",
    description:
      "We aim to provide the highest level of veterinary services to farms throughout the Island and to achieve this through a growing team of dedicated farm animal vets ",

    link: '/animalFormView',
  },
  {
    id: 2,
    image: require("../../assets/images/img-hero2.jpg"),
    title: "  Farm animal - Wellness Consultation",
    description:
      "The system is designed to provide a range of services related to the health and wellbeing of farm animals. ",

    link: '/animalFormView',
  },
  {
    id: 3,
    image: require("../../assets/images/img-hero3.jpg"),
    title: "  Farm animal - Wellness Consultation",
    description:
      "The Consultation will allow you to  ask your questions without embarrassment and without judgment",
    link: '/animalFormView',
  },
];

export default function vetHomePage() {
  return (
    <section id="home" className="hero-block">
      <header id="header">
        <AppHeader />
      </header>
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
