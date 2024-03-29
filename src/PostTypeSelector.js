import React from 'react';
import './PostTypeSelector.css';

function PostTypeSelector({ selectedOption, onSelectOption }) {
  const handleOptionChange = (option) => {
    onSelectOption(option);
  };
  return (
    <div className="post-type-selector">
      <h2>Select Post Type:</h2>
      
        <input
          type="radio"
          id="question"
          name="postType"
          value="question"
          checked={selectedOption === 'question'}
          onChange={() => handleOptionChange('question')}
        />
        <label htmlFor="question">Ask a Question</label>
      
      
        <input
          type="radio"
          id="article"
          name="postType"
          value="article"
          checked={selectedOption === 'article'}
          onChange={() => handleOptionChange('article')}
        />
        <label htmlFor="article">Write an Article</label>
      
   
        <input
          type="radio"
          id="findQuestion"
          name="postType"
          value="findQuestion"
          checked={selectedOption === 'findQuestion'}
          onChange={() => handleOptionChange('findQuestion')}
        />
        <label htmlFor="findQuestion">Find a Question</label>
      
    </div>
  );
}

export default PostTypeSelector;
