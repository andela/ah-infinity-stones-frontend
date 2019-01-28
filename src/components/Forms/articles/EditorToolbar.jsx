import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


class EditorConvertToHTML extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  }

  componentDidMount() {
    if (this.props.article_body) {
      const articleBody = this.props.article_body;
      this.setState({
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(articleBody),
          ),
        ),
      });
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName="toolbar-class"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          id="articleBody"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML
