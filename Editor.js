import React, { useState } from "react";
import "./Editor.css";

const Editor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="editor-container">
      <h1>Editor Area</h1>
      <div className="editor">
        <textarea
          className="editor-textarea"
          value={content}
          onChange={handleContentChange}
          placeholder="Start typing here..."
        />
      </div>
      <div className="editor-preview">
        <h2>Preview</h2>
        <div className="editor-preview-content">
          {content ? content : "Start typing to see the preview here..."}
        </div>
      </div>
    </div>
  );
};

export default Editor;
