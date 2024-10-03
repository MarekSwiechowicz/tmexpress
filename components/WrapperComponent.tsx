import React, { ReactNode } from "react";

interface BaseComponentProps {
  children: ReactNode;
}

export default function BaseComponent({ children }: BaseComponentProps) {
  return <div className="px-4 lg:px-36 bg-white">{children}</div>;
}
