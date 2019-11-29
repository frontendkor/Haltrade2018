import React, { Component } from "react";
import TitleText from "../../../components/TitleText/TitleText";
import mod from "../Quality/Quality.module.sass";
import mod2 from "../AboutUs/AboutUs.module.sass";
import Certificate from "./certificate.jpg";

const QualityText =
  "Обеспечение качества и технологии Халяль является основным приоритетом нашей Компании. Для осуществления ручного убоя птицы на базе фабрик организованы специальные бригады специалистов по забою и контролю обвалки выпускаемой продукции.";

class Quality extends Component {
  render() {
    return (
      <article className={mod.Quality}>
        <div className="container">
          <div className="row">
            <div className={mod2.textDecorLine}>
              <TitleText
                title="Качество и безопасность"
                text={QualityText}
                size="big"
                subtitle={QualityText}
              />
            </div>
            <div className={mod.CertificateContainer}>
              <img src={Certificate} alt="img" />
            </div>
            <div className={mod.VideoContainer}>
              <iframe
                title="Video"
                src="https://www.youtube.com/embed/SMa3In-A9yc?controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Quality;
