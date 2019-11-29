import React, { Component } from "react";
import TitleText from "../../../components/TitleText/TitleText";
import mod from "./ProductDescription.module.sass";
import descriptionImg from "./description-img.jpg";
import chiken from "./chiken.png";
import filet from "./filet.png";
import ham from "./ham.png";

const DescriptionText =
  "Наш ассортимент включает в себя тушку птицы халяль, разделку цыпленка халяль, субпродукты халяль в лотках и валом. Вся продукция сертифицирована комитетом Халяль и вырабатывается под четким контролем ответственных специалистов. Выпускаемая продукция представлена не только в торговых точках по всей России, но и хорошо зарекомендовала себя среди производителей и переработчиков мясной продукции, а также пользуется большим спросом среди ресторанов.";

const img = (
  <div className={mod.imgContainer}>
    <img src={descriptionImg} alt="img" className={mod.img} />
    <img src={chiken} alt="img" className={mod.imgNext} />
    <img src={filet} alt="img" className={mod.imgNext} />
    <img src={ham} alt="img" className={mod.imgNext} />
  </div>
);

class ProductDescription extends Component {
  render() {
    return (
      <article className={mod.ProductDescription}>
        {img}
        <div className={mod.description}>
          <TitleText
            title="Описание продукции"
            subtitle={DescriptionText}
            size="min"
          />
        </div>
      </article>
    );
  }
}

export default ProductDescription;
