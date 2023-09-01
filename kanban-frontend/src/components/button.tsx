import { useMemo } from "react";

export default function Button({
  children,
  onClick,
  buttonType = "PRIMARY",
}: {
  children: React.ReactNode;
  onClick: () => void;
  buttonType?: "PRIMARY" | "DELETE" | "ADD" | "CLOSE";
}) {
  const classNames = useMemo(() => {
    const baseClasses = "rounded p-2 ml-0 mr-5 mt-2 mb-2";

    if (buttonType === "DELETE") {
      return `${baseClasses} bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none`;
    }

    if (buttonType === "ADD") {
      return `${baseClasses} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none `;
    }
    if (buttonType === "CLOSE") {
      return `${baseClasses} bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none `;
    }

    return `${baseClasses} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none`;
  }, [buttonType]);

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
