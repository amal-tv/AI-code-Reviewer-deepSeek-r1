import { useState } from "react";
import { Editor } from "./components/Editor";
import { Review } from "./components/Review";

function App() {
  const [review, setreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateReview = async (code: string) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      console.log("Received data:", data);
      setreview(data.review);
      // console.log("Setting loading to false");
      setLoading(false);
    } catch (error) {
      // console.error("Error:", error);
      setLoading(false);
      alert("something went wrong");
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Editor loading={loading} onGenerateReview={handleGenerateReview} />
      <Review loading={loading} review={review} />
    </div>
  );
}

export default App;
