import React from "react";

export default function Title({ children }) {
  return (
    <h3 className="text-sm font-semibold px-6 md:px-0 mb-3">{children}</h3>
  );
}
