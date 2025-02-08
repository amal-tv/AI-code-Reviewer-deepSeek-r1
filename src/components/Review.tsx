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
  return (
    <div className="h-full w-6/12 bg-black p-4 overflow-scroll">
      {loading ? (
        <div className="flex justify-center items-center h-full flex-col">
          <Loader />
          <span className="p-2 ml-1">generating</span>
        </div>
      ) : (
        <MarkdownPreview
          source={sanitizedReview}
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
