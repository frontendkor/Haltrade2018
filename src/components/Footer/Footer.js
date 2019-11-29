import React from "react";
import Logo from "../Logo/Logo";
import { Vk, Instagram } from "./ic";
import FormBackCallContainer from "../../containers/FormsContainers/FormBackCallContainer";
import mod from "./Footer.module.sass";

const FooterText =
  "У нас на сайте вы можете заказать мясо птицы Халяль оптом с доставкой по Минску и по всей Беларуси. В ассортименте присутствует охлажденная и замороженная тушка цб халяль, окорочок цб халяль, бедро цб халяль, крылья цб халяль, грудка цб халяль, филе грудки цб халяль, филе бедра б/к б/к халяль, печень цб халяль, фарш цб халяль, желудки цб халяль, тушка утки халяль упакованных как в лотки (подложки), так и валом и монолитом. Вся продукция, сертифицированная комитетом стандартизации Халяль. Только ручной убой птицы, без добавления вредных веществ и гормонов роста.";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className={mod.Content}>
          <div className={mod.LogoIcContainer}>
            <div className={mod.Logo}>
              <Logo />
            </div>
            <div className={mod.IcContainer}>
              <a href="https://vk.com" target="blank" className={mod.IcLink}>
                <div className={`${mod.Ic} ${mod.IcVk}`}>
                  <Vk />
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                target="blank"
                className={mod.IcLink}
              >
                <div className={`${mod.Ic} ${mod.IcInstagram}`}>
                  <Instagram />
                </div>
              </a>
            </div>
          </div>
          <div className={mod.Info}>
            <div className={mod.Contacts}>
              <div className={mod.Email}>
                <p>Email:</p>
                <a href="mailto:info@haltrade.by">info@haltrade.by</a>
              </div>
              <div className={mod.Messenger}>
                <a href="tel:+375 255 383 444">+375 255 383 444</a>
                <span>Telegram/WhatsApp/Viber</span>
              </div>
              <div>
                <FormBackCallContainer />
              </div>
            </div>
            <div className={mod.Text}>
              <p>{FooterText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
