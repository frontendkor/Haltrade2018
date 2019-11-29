import React, { Component } from "react";
import TitleText from "../../../components/TitleText/TitleText";
import FactsBox from "../../../components/FactsBox/FactsBox";
import mod from "./AboutUs.module.sass";

const FactsBoxData = [
  {
    id: 7,
    text: "Цены ниже рыночных"
  },
  {
    id: 8,
    text: "Большой процент выработки"
  },
  {
    id: 9,
    text: "100% Халяль (ручной забой)"
  },
  {
    id: 10,
    text: "Высшее качество продукции"
  }
];

const aboutUsText =
  "Мы региональная компания - дистрибьютор продуктов питания. Наша специализация только на 100% Халяль продуктах, проверенных нами. Доставляем продукты на собственном транспорте, чтобы обеспечить и проконтролировать необходимые условия перевозки продуктов. Наша цель - максимально распространить качественные продукты и дать возможность нашим партнерам получать удовольствие, прибыль, а главное благо от нашего сотрудничества.";

class AboutUs extends Component {
  render() {
    return (
      <article className={mod.AboutUs}>
        <div className="container">
          <div className="row">
            <div className={mod.textDecorLine}>
              <TitleText title="О нас" subtitle={aboutUsText} size="big" />
            </div>
            <FactsBox data={FactsBoxData} />
          </div>
        </div>
      </article>
    );
  }
}

export default AboutUs;
