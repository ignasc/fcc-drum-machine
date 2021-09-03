/*---------- REACT  ----------*/
class ManoApp extends React.Component {
  constructor(props) {
    super(props);    
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
    this.state = {
      displayMessage: "Start Playing!"
    };
    
    this.playOnKeyPress = this.playOnKeyPress.bind(this);
    this.updateMessage = this.updateMessage.bind(this)
  };

  drumSet1 = [
    {
      key: "Q",
      message: "Heater-1",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      key: "W",
      message: "Heater-2",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      key: "E",
      message: "Heater-3",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      key: "A",
      message: "Heater-4",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      key: "S",
      message: "Heater-6",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      key: "D",
      message: "Hat-1",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      key: "Z",
      message: "Kick-n-Hat",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      key: "X",
      id: "X",
      message: "Kick-1",
      source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      key: "C",
      message: "Hat-2",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  componentDidMount() {
    document.body.addEventListener("keypress", (event) => {this.playOnKeyPress(event)});
  };
  componentWillUnount() {
    document.body.removeEventListener("keypress", (event) => {this.playOnKeyPress(event)});
  };

  /*Play audio on certain key press (not click)*/
  playOnKeyPress(event) {
    let usableKeys = ["Q","W","E","A","S","D","Z","X","C"];
    let key = event.key.toUpperCase();
    let buttonID = usableKeys.indexOf(key);

    /*Check if any of 9 assigned buttons was pressed*/
    if (buttonID != -1) {
      let drumButton = document.getElementById(this.drumSet1[buttonID].key);
      drumButton.click();
    }
  };

  /*Update display message*/
  updateMessage(zinute) {
    this.setState((state) => ({
      displayMessage: zinute
    }));
  }

  render() {
    return(
      <div id="drum-machine">
        <header>Drum machine</header>
        <DrumDisplay message={this.state.displayMessage} />
        <div id="drum-buttons">
          <div id="row-1">
            <DrumButton set={this.drumSet1[0]} updateMessage={this.updateMessage} />
            <DrumButton set={this.drumSet1[1]} updateMessage={this.updateMessage} />
            <DrumButton set={this.drumSet1[2]} updateMessage={this.updateMessage} />
          </div>
          
          <div id="row-2">
            <DrumButton set={this.drumSet1[3]} updateMessage={this.updateMessage} />
            <DrumButton set={this.drumSet1[4]} updateMessage={this.updateMessage} />
            <DrumButton set={this.drumSet1[5]} updateMessage={this.updateMessage} />
          </div>

          <div id="row-3">
            <DrumButton set={this.drumSet1[6]} updateMessage={this.updateMessage} />
            <DrumButton set={this.drumSet1[7]} updateMessage={this.updateMessage} />
            <DrumButton set={this.drumSet1[8]} updateMessage={this.updateMessage} />
          </div>

        </div>
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
      <div id="display">Beat: {this.props.message}</div>
    );
  };
};

class DrumButton extends React.Component {
  constructor(props) {
    super(props);

    this.buttonPressed = this.buttonPressed.bind(this);
  };

  buttonPressed(){
    let audioClip = document.getElementById(this.props.set.key); /*ID is set the same way in the <audio> element in render method*/
    audioClip.play();
    this.props.updateMessage(this.props.set.message);
  };

  render() {
    return(
      /*NOTE: when function is passed to onClick with parentheses, it must be passed to a function first
      otherwise this onClick={this.buttonPressed(this.props.set.id)} will be executed immediately on first render
      when element is loaded*/
      <button className="drum-pad" id={this.props.set.message}
        onClick={() => this.buttonPressed()}>
        {this.props.set.key}
        <audio src={this.props.set.source} className="clip" id={this.props.set.key}>
          <source src={this.props.set.source} type="audio/mp3"></source>
          Your browser does not support audio element.
        </audio>
      </button>
    );
  };
};

/*---------------------------------*/
ReactDOM.render(
    <ManoApp />
  , document.getElementById('root'));

  /*Drum sounds

  set 1
  https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3
  https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3

  set 2
  https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3
  https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3


  */