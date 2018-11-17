// @flow
import * as React from 'react';
import './CharComponent.css';

type Props = {
  char: string,
};

const CharComponent = (props: Props) => {
  const { char } = props;

  return <div className="char-component">{char.split('')[0]}</div>;
};

export default CharComponent;
