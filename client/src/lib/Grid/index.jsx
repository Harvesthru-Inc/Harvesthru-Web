import React from "react";
import { GridWrapper, ColWrapper } from "./styled";

const Row = ({ justify, align, text, children }) => {
  return (
    <GridWrapper justify={justify} align={align} text={text}>
      {children}
    </GridWrapper>
  );
};

const Col = ({ lg, md, sm, xs, text, children }) => (
  <ColWrapper lg={lg} md={md} sm={sm} xs={xs} text={text}>
    {children}
  </ColWrapper>
);

export { Row, Col };
