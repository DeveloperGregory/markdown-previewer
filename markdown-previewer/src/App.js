import './App.css';
import React from 'react'
import marked from 'marked'
import DOMpurify from 'dompurify'
// An React App that takes marked up text and converts it to HTML elements

// Making carriage return into line breaks
marked.setOptions({breaks: true});

// Component Class for Editor Box
class EditorBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editorText : '# This is an example of a h1 tag\n## This is an example of a h2 tag\nHere is a link to [freecodecamp](https://www.freecodecamp.com)\n here is some inline code `<div></div>`\n```\nfunction hello(){\n\tconsole.log("Hello World");\n}\n```\n >Here is a block quote\n\nNow for a list\n- item\n- item2\n\nHow about a numbered list\n1. item 1\n1. item 2\n1. item 3\n\nHere is an example of **bold** and an example of *italic*\n\n and last but not least an image ![A State Park](https://www.americasstateparks.org/wp-content/uploads/2020/01/vail-1732981_1920-800x468.jpg)'
    };
    
    this.rawMarkup = this.rawMarkup.bind(this);
  }
  //converts editor text into HTML
  rawMarkup(){
    let markup = this.state.editorText;
    return ({__html: DOMpurify.sanitize(marked(markup))})
  }
  //updates the state of the component
  handleChange(e){
    this.setState({editorText: e.target.value});
  }
  render(){
    return (<div> 
              <div className='text-box'>Editor Window
                <textarea id='editor' rows={20} columns={100} onChange={this.handleChange.bind(this)} value={this.state.editorText}></textarea>
              </div>
              <div id='previewer'>Previewer
                <div id='preview'  dangerouslySetInnerHTML={this.rawMarkup()}/>
              </div>
            </div>
           )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EditorBox />
      
      </header>
    </div>
  );
}

export default App;
