import React, { Component } from "react";

import TitleText from "../../components/TitleText/TitleText";
import CatalogContaner from "../../containers/Catalog/CatalogContaner";

class CatalogPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col1">
              <TitleText title="Каталог" />
            </div>
          </div>
        </div>
        <CatalogContaner />
      </React.Fragment>
    );
  }
}

export default CatalogPage;
