// @flow
import * as React from 'react';
import { Alert } from 'reactstrap';

type Props = {
  textLength: number,
  minimumLength: number,
};

const ValidationComponent = (props: Props) => {
  const { textLength, minimumLength } = props;

  let output = null;
  if (textLength < minimumLength) {
    output = <Alert color="warning">Text too short</Alert>;
  } else {
    output = <Alert color="success">Text long enough</Alert>;
  }

  return output;
};

export default ValidationComponent;
