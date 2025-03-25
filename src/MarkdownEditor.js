import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownEditor.css';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');

  // Function to insert Markdown syntax
  const insertMarkdown = (syntax) => {
    setMarkdown(markdown + syntax);
  };

  return (
    <div className="markdown-editor">
      {/* Toolbar with buttons */}
      <div className="toolbar">
        <button onClick={() => insertMarkdown('**bold**')}><b>B</b></button>
        <button onClick={() => insertMarkdown('_italic_')}><i>I</i></button>
        <button onClick={() => insertMarkdown('~~strikethrough~~')}>S</button>
        <button onClick={() => insertMarkdown('# Heading 1\n')}>H1</button>
        <button onClick={() => insertMarkdown('## Heading 2\n')}>H2</button>
        <button onClick={() => insertMarkdown('[Link](https://example.com)')}>🔗</button>
        <button onClick={() => insertMarkdown('> Blockquote\n')}>“</button>
        <button onClick={() => insertMarkdown('```\ncode block\n```')}>{} Code</button>
      </div>

      {/* Markdown Input */}
      <div className="editor">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type your markdown here..."
        />
      </div>

      {/* Markdown Preview */}
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
