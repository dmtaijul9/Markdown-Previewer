import React, { useState } from "react";
import marked from "marked";
import "./App.css";

const initialState = `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

function App() {
  const [state, setstate] = useState(initialState);
  const clearInputHandler = () => {
    setstate("");
  };
  const changeHandler = event => {
    setstate(event.target.value);
  };
  return (
    <div className="App my-5">
      <div className="d-flex justify-content-around">
        <div className="editing_area col">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Editor</h1>
            <button onClick={clearInputHandler}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <hr />
          <textarea
            className="form-control"
            name="editor"
            id="editor"
            cols="30"
            rows="15"
            value={state}
            onChange={changeHandler}
            placeholder="Write your markup here..."
          />
        </div>
        <div className="previewer_area col ">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Previewer</h1>
            <i class="fas fa-eye"></i>
          </div>
          <hr />
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(state) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
