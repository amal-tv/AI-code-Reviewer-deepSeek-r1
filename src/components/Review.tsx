import { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Loader } from "./Loader";
import DOMPurify from "dompurify";

export const Review = ({
  review,
  loading,
}: {
  review: string;
  loading: boolean;
}) => {
  console.log("normal", review);

  const sanitizedReview = DOMPurify.sanitize(
    review.replace(/<think>/g, "<div>").replace(/<\/think>/g, "</div>")
  );

  console.log("purified  : ", sanitizedReview);

  // State for the typing effect
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!loading) {
      setDisplayText(""); // Reset text when new review comes
      let i = 0;
      const interval = setInterval(() => {
        if (i < sanitizedReview.length) {
          setDisplayText((prev) => prev + sanitizedReview.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust typing speed (lower = faster)

      return () => clearInterval(interval);
    }
  }, [sanitizedReview, loading]);

  return (
    <div className="h-full w-6/12 bg-black p-4 overflow-scroll">
      {loading ? (
        <div className="flex justify-center items-center h-full flex-col">
          <Loader />
          <span className="p-2 ml-1">generating</span>
        </div>
      ) : (
        <MarkdownPreview
          source={displayText} // Gradually typed text
          style={{
            fontSize: 20,
            backgroundColor: "transparent",
            color: "gray",
          }}
        />
      )}
    </div>
  );
};
