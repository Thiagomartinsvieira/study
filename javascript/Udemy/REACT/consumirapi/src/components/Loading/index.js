import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styled";

export default function Loading({ isLoading }) {
  if(! isLoading) return <></>;
  return(
    <Container>
      <div />
      <span>Caregando...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false
}

Location.protoType = {
  isLoading: PropTypes.bool,

};