import React from "react";

export const Summary = ({ text }) => {
  const words = () => text.split(/\s/).filter((ele) => ele.length !== 0).length;

  const timeToRead = () => {
    let timeTaken = words() / 125;
    let convertedTime = timeTaken;
    if (timeTaken !== 0) {
      if (timeTaken < 1) {
        convertedTime = `${(convertedTime * 60).toPrecision(4)} Sec`;
      } else if (timeTaken < 60) {
        convertedTime = `${convertedTime.toPrecision(4)} Min`;
      } else if (timeTaken < 3600) {
        convertedTime = `${(convertedTime / 60).toPrecision(4)} Hour`;
      }
    }
    return convertedTime;
  };

  return (
    <>
      <p className="block mt-5 font-semibold text-xl tracking-wide ">
        Your Text Summary
      </p>
      <div className="my-4 border-2 border-black/40 dark:border-white/40 px-2 py-2 w-full rounded-sm transition-all dark:bg-white/10 flex flex-col gap-1">
        <p>
          Words: <span className="font-bold">{words()}</span>
        </p>
        <p>
          Character: <span className="font-bold">{text.length}</span>
        </p>
        <p>
          Time to Read: <span className="font-bold">{timeToRead()}</span>
        </p>
      </div>
    </>
  );
};
