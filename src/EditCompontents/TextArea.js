import React, {Component} from 'react';
import {ExportPDF} from './text_to_pdf';
import { Editor } from '@tinymce/tinymce-react';
import {VideoDetail} from './video_detail';

export class TextArea extends Component {

  constructor(props) {
    super(props);

    this.state = { editorContent: '' };

    this.download = this.download.bind(this);
    this.getEditorContent=this.getEditorContent.bind(this);
  }

  download(filename, text) {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  handleEditorChange = (e) => {
    this.editorContent = e.target.getContent({format:'text'});
  }

  getEditorContent(){
    this.download("VidEdu",this.editorContent);
  }
  render(){

    return (
      <div className="col-md-4 textArea">
          <Editor
            apiKey='8rp4hn347wu0de5xdlo0m1desvvv52rfiyifi05ish51xzdg'
            initialValue="TITLE"
            selector="textarea"
            theme="modern"
            id="tinyMCE"
            init={{
               plugins: 'link code',
               toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
             }}
             onKeyDown={this.props.onKeyDownEditor}
             onChange={this.handleEditorChange}
            />
         <br />

         <ExportPDF
           videoTitle={"hi"}
           getEditorContent={this.getEditorContent}
          />
      </div>
    ); // end return
  } // end render

}

