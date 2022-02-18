import React from "react";

export const Alert = ({ alert }) => {
  let alertColor = "green";
  if (alert === "Enter Text" || alert === null) alertColor = "red";
  return (
    alert && (
      <div
        className={`container absolute border-2 border-${alertColor}-700 bg-${alertColor}-700/10 dark:border-${alertColor}-400 dark:bg-${alertColor}-400/10 px-2 py-2 w-full rounded-sm transition-all flex flex-col gap-1`}
      >
        <p className="block font-semibold text-xl tracking-wide">{alert}</p>
      </div>
    )
  );
};
