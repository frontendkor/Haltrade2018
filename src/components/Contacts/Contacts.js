import React from "react";
import Item from "./Item/Item";
import FormFreeShippingContainer from "../../containers/FormsContainers/FormFreeShippingContainer";
import contactsData from "./ContactsData";

import mod from "./Contacts.module.sass";

const Contacts = props => {
  const renderContactsItem = () => {
    const data = contactsData;
    let contactsItems;
    if (data.length) {
      contactsItems = data.map(item => {
        let propsis = {};
        for (let key in item) {
          propsis[key] = item[key];
        }
        return <Item key={item.id} data={propsis} />;
      });
    }
    return contactsItems;
  };
  return (
    <div className={mod.Contacts}>
      {renderContactsItem()}
      <FormFreeShippingContainer />
    </div>
  );
};

export default Contacts;
