/*---------- REACT  ----------*/
class ManoApp extends React.Component {
  constructor(props) {
    super(props);
    
    const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
    
    this.state = {
      inputText: defaultText
    };
    this.updateText = this.updateText.bind(this);
  };
  
  updateText = (event) => {
    this.setState( () => {
      return {
        inputText: event.target.value 
        }
      }
    );
  };
    
  render() {
    return (
    <div>
        <TextEditor textInput={this.state.inputText} updateText={this.updateText}/>
        <TextRenderer markedText={this.state.inputText}/>
    </div>
    );
  };
};

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state= {};
  };
  
  render() {
    return(
      <div className="textEditor">
        <div id="textEditorHeader">Text Markdown Editor</div>
        <textarea defaultValue={this.props.textInput} id="editor" onChange={this.props.updateText}></textarea>
      </div>
    );
  };
};

class TextRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {};
    
    this.createMarkup = this.createMarkup.bind(this);
  };
  
  createMarkup(text) {
    let markedText = {__html: marked(this.props.markedText, {breaks: true})};
    console.log(markedText);
    return markedText;
  };
  
  render() {
    console.log(this.createMarkup(this.props.markedText));
    return(
      <div className="textRenderer">
        <div id="textRendererHeader">Marked Text Preview</div>
        <div id="preview" dangerouslySetInnerHTML={this.createMarkup(this.props.markedText)}/>
      </div>
    );
  };
};

/*---------------------------------*/
ReactDOM.render(
    <ManoApp />
  , document.getElementById('root'));