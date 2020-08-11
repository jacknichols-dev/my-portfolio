import React, { Component } from "react";
import "./Carousel.scss";
import Card from "../../components/UI/Card/Card";
import pro1 from "../../assets/img/project-1@2x.jpg";
import pro2 from "../../assets/img/project-2@2x.jpg";
import pro3 from "../../assets/img/project-3@2x.jpg";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Restaurant Site",
          subTitle: `HTML, SCSS, JS`,
          imgSrc: pro1,
          link1: "https://jacknichols-dev.github.io/restaurant-website",
          link2: "https://github.com/jacknichols-dev/restaurant-website",
          selected: false,
        },
        {
          id: 1,
          title: "Coffee Site",
          subTitle: `HTML, CSS, JS`,
          imgSrc: pro2,
          link1: "https://jacknichols-dev.github.io/coffee-ecommerce-site",
          link2: "https://github.com/jacknichols-dev/coffee-ecommerce-site",
          selected: false,
        },
        {
          id: 2,
          title: "Clothes Site",
          subTitle: `React`,
          imgSrc: pro3,
          link1: "https://jacknichols-dev.github.io/leopardi-web-app/",
          link2: "https://github.com/jacknichols-dev/leopardi-web-app",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      } else {
        item.selected = true;
      }
    });

    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <container fluid={true} className="Carousel">
        <row className="Carousel__row">{this.makeItems(this.state.items)}</row>
      </container>
    );
  }
}
