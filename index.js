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

  drumSet1 = [
    {
      key: "Q",
      id: "testSound",
      message: "testSound played",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
  ]

  render() {
    return(
      <div id="drum-machine">
        <p>Drum machine</p>
        <DrumDisplay />
        <DrumButton set={this.drumSet1[0]} />
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

    this.buttonPressed = this.buttonPressed.bind(this);

  };

  buttonPressed(buttonID, audio){
    console.log("Batonas " + buttonID + " paspaustas");
    console.log("Audio source:" + audio);

    let audioClip = document.getElementById("audio-" + this.props.set.id); /*ID is set the same way in the <audio> element in render method*/
    audioClip.play();
    
  };

  render() {
    return(
      /*NOTE: when function is passed to onClick with parentheses, it must be passed to a function first
      otherwise this onClick={this.buttonPressed(this.props.set.id)} will be executed immediately on first render
      when element is loaded*/
      <button className="drum-pad" id={this.props.set.id} onClick={() => this.buttonPressed(this.props.set.id, this.props.set.source)}>
        {this.props.set.key}
        <audio id={"audio-" + this.props.set.id}>
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