import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'bootstrap/dist/css/bootstrap.css';
import { KEYCODE } from '../apis/keys';

// each new component MUST return a value
const TextAreaNew = ({ video }) => {
    if (!video) {
        return <div className="loading">Loading Title...</div>
    } 
        return (
            <div className="textArea">
                <Editor
                    apiKey={KEYCODE.tinymce}
                    initialValue=""
                    selector="textarea"
                    theme="modern"
                    id="tinyMCE"
                    init={{
                        plugins: 'link code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                  
                />
                <br />
            </div>
        ); // end return
    };

export default TextAreaNew;