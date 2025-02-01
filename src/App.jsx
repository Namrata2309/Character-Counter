import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const maxLimit = 100;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-br from-gray-200 to-gray-400">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 text-center">Character Counter</h1>
      <textarea
        className="w-full max-w-lg h-40 p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLimit}
      />
      <p className="mt-2 text-lg text-gray-700 font-medium text-center">
        {text.length}/{maxLimit} characters
      </p>
    </div>
  );
}
