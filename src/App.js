// @flow
import * as React from 'react';
import { Alert, Input } from 'reactstrap';
import ValidationComponent from './components/ValidationComponent';
import './App.css';

type Props = {};
type State = {
  textLength: number,
  minimumLength: number,
};

class App extends React.Component<Props, State> {
  state = {
    textLength: 0,
    minimumLength: 5,
  };

  onChangeReportTextLength = (event: SyntheticEvent<HTMLInputElement>) => {
    const textLength = event.currentTarget.value ? event.currentTarget.value.length : 0;
    this.setState({ textLength });
  };

  render = () => {
    const { textLength, minimumLength } = this.state;

    return (
      <div className="App">
        <Input type="text" onChange={this.onChangeReportTextLength} />
        <Alert color="info">{textLength}</Alert>
        <ValidationComponent textLength={textLength} minimumLength={minimumLength} />
      </div>
    );
  };
}

export default App;
