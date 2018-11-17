// @flow
import * as React from 'react';
import { Alert, Input } from 'reactstrap';
import './App.css';

type Props = {};
type State = {
  textLength: number,
};

class App extends React.Component<Props, State> {
  state = {
    textLength: 0,
  };

  onChangeReportTextLength = (event: SyntheticEvent<HTMLInputElement>) => {
    const textLength = event.currentTarget.value ? event.currentTarget.value.length : 0;
    this.setState({ textLength });
  };

  render = () => {
    const { textLength } = this.state;

    return (
      <div className="App">
        <Input type="text" onChange={this.onChangeReportTextLength} />
        <Alert color="info">{textLength}</Alert>
      </div>
    );
  };
}

export default App;
