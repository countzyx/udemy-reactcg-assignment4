// @flow
import * as React from 'react';
import { Alert, Input } from 'reactstrap';
import ValidationComponent from './components/ValidationComponent';
import './App.css';
import CharComponent from './components/CharComponent';

type Props = {};
type State = {
  text: ?string,
  minimumLength: number,
};

class App extends React.Component<Props, State> {
  state = {
    text: null,
    minimumLength: 5,
  };

  onChangeUpdateText = (event: SyntheticEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    this.setState({ text });
  };

  render = () => {
    const { text, minimumLength } = this.state;

    let charComponents = null;

    if (text != null && text.length) {
      const chars = text.split('');
      charComponents = (
        <div>
          {chars.map((c, i) => (
            <CharComponent
              char={c}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <Input type="text" onChange={this.onChangeUpdateText} />
        <Alert color="info">{text ? text.length : 0}</Alert>
        <ValidationComponent textLength={text ? text.length : 0} minimumLength={minimumLength} />
        {charComponents}
      </div>
    );
  };
}

export default App;
