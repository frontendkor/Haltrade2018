import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Nav from "../../components/Nav/Nav";
import showNav from "../../actions/Nav/showNav";

class NavContainer extends Component {
  render() {
    const { showNav, show } = this.props;
    return <Nav showNav={showNav} show={show} />;
  }
}

const mapStateToProps = store => {
  return {
    show: store.Nav
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showNav: show => dispatch(showNav(show))
  };
};

NavContainer.propTypes = {
  show: PropTypes.shape({
    show: PropTypes.bool.isRequired
  }),
  showNav: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(NavContainer);
