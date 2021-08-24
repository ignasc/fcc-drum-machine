/*---------- REACT  ----------*/
class ManoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    
  };
    
  render() {
    return (
      <DrumMachine />
    );
  };
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div id="drum-machine">
        <p>Drum machine</p>
        <DrumDisplay />
        <DrumButton />
      </div>
    );
  };
};

class DrumDisplay extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div id="display">Drum display</div>
    );
  };
};

class DrumButton extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div class="drum-pad">Drum button</div>
    );
  };
};


/*---------------------------------*/
ReactDOM.render(
    <ManoApp />
  , document.getElementById('root'));