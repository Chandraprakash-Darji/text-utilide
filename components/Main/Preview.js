import React from "react";

export const Preview = ({ text }) => {
  return text !== "" ? (
    <>
      <p className="block mt-5 font-semibold text-xl tracking-wide ">
        Text Preview
      </p>
      <pre className="my-4 border-2 border-black/40 dark:border-white/40 px-2 py-2 w-full rounded-sm transition-all dark:bg-white/10 flex flex-col gap-1 font-sans">
        {text}
      </pre>
    </>
  ) : (
    <div className="my-4 border-2 border-red-700 dark:border-red-400 px-2 py-2 w-full rounded-sm transition-all dark:bg-white/10 flex flex-col gap-1">
      <p className="block font-semibold text-xl tracking-wide">
        No Preview Available
      </p>
    </div>
  );
};
