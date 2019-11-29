import React, { Component } from "react";
import modLinks from "./Links.module.sass";

class Links extends Component {
  renderLinks = (data, clickLink, addClassActiveLink) => {
    let Links;
    if (data.length) {
      Links = data.map(function(item) {
        return (
          <a
            key={item.id}
            id={item.id}
            href={`/${item.id}`}
            onClick={clickLink}
            className={`${addClassActiveLink(item.id)} ${modLinks.link}`}
          >
            {item.title}
          </a>
        );
      });
    } else {
      Links = <p> ... </p>;
    }
    return Links;
  };
  render() {
    const { data, clickLink, addClassActiveLink } = this.props;
    return (
      <React.Fragment>
        {this.renderLinks(data, clickLink, addClassActiveLink)}
      </React.Fragment>
    );
  }
}

export default Links;
