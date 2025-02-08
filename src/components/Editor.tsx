import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";

export const Editor = ({
  onGenerateReview,
  loading,
}: {
  onGenerateReview(code: string): void;
  loading: boolean;
}) => {
  const [code, setCode] = useState("");

  return (
    <div className="h-full w-6/12 bg-black relative">
      {/* ReactCodeMirror as a child of relative container */}
      <ReactCodeMirror
        height="100vh"
        extensions={[javascript({ jsx: true })]}
        value={code}
        onChange={(newCode) => setCode(newCode)} //here the onChange in the reactcodemirror recives the newvalues usertyped as an argements
        theme="dark"
        style={{
          fontSize: 20,
        }}
      />

      <button
        disabled={loading}
        onClick={() => onGenerateReview(code)}
        className={`absolute top-4 right-4 py-2 px-4 rounded shadow-lg 
    transition-all duration-300
    ${
      loading
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-slate-700 hover:bg-slate-900 active:bg-slate-400"
    } 
    text-green-200`}
      >
        {loading ? "Loading..." : "Generate Review"}
      </button>
    </div>
  );
};
