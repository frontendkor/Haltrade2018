import React, { Component } from "react";
import Delivery from "./Delivery/Delivery";
import Pickup from "./Pickup/Pickup";

class DeliveryPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Delivery />
        <Pickup />
      </React.Fragment>
    );
  }
}

export default DeliveryPage;
