import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ModalContainer from "./containers/Modal/ModalContainer";

import Header from "./components/Header/Header";

import BanerPage from "./pages/BanerPage/BanerPage";
import CatalogPage from "./pages/CatalogPage/CatalgPage";
import OrderSamplesPage from "./pages/OrderSamplesPage/OrderSamplesPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

import Preloader from "./components/Preloader/Preloader";

import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PreloaderOpacity: false,
      PreloaderNo: false
    };
  }
  componentDidMount() {
    const remuvePreloader = async () => {
      const preloaderOpacity = async () =>
        this.setState({ PreloaderOpacity: true });
      await preloaderOpacity();
      setTimeout(() => {
        this.setState({ PreloaderNo: true });
      }, 900);
    };
    window.onload = () => {
      document.readyState === "complete" && remuvePreloader();
    };
  }
  render() {
    const { PreloaderOpacity, PreloaderNo } = this.state;
    return (
      <Router
        basename={
          document.location.host === `frontendkor.github.io`
            ? `/Haltrade2018`
            : ``
        }
      >
        <div className="App">
          <div
            className={`PreloaderContainer ${PreloaderOpacity &&
              `opacity`} ${PreloaderNo && `PreloaderContainerNo`}`}
          >
            <Preloader />
          </div>
          <ModalContainer />
          <Header />
          <Route
            render={({ location }) => (
              <TransitionGroup className="content">
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="page"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={BanerPage} />
                    <Route path="/catalog" component={CatalogPage} />
                    <Route path="/order" component={OrderSamplesPage} />
                    <Route path="/delivery" component={DeliveryPage} />
                    <Route path="/about-us" component={AboutUsPage} />
                    <Route path="/contacts" component={ContactsPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
