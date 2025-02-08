import React from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';

export const Review = () => {
  return (
    <div className="h-full w-6/12 bg-black">
      <MarkdownPreview source={'fda'}
      
      style={{
        fontSize: 20,
        backgroundColor: "transparent", // Remove background color
          color: "white", // Ensure text is visible
      }} />
    </div>
  );
};
