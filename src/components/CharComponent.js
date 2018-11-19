// @flow
import * as React from 'react';
import './CharComponent.css';

type Props = {
  char: string,
  onClickHandler?: ?(e: SyntheticEvent<>) => void,
};

const CharComponent = (props: Props) => {
  const { char, onClickHandler } = props;

  return (
    <div className="char-component" onClick={onClickHandler}>
      {char.split('')[0]}
    </div>
  );
};

CharComponent.defaultProps = {
  onClickHandler: null,
};

export default CharComponent;
