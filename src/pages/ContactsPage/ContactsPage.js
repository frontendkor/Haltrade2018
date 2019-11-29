import React, { Component } from "react";

import TitleText from "../../components/TitleText/TitleText";
import Contacts from "../../components/Contacts/Contacts";
import Location from "../../components/Location/Location";
import mod from "./ContactsPage.module.sass";

class ContactsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col1">
              <TitleText title="Контакты" size="big" />
            </div>
            <div className={mod.contactsContainer}>
              <Contacts />
              <Location />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactsPage;
