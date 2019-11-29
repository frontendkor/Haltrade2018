import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Touch from "../../components/Nav/Touch/Touch";
import showNav from "../../actions/Nav/showNav";

class TouchContainer extends Component {
  render() {
    const { showNav, show } = this.props;
    return <Touch showNav={showNav} show={show} />;
  }
}

const mapStateToProps = store => {
  return {
    show: store.Nav.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showNav: show => dispatch(showNav(show))
  };
};

TouchContainer.propTypes = {
  show: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TouchContainer);
