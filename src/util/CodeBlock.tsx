/// <reference types="prismjs" />
import React, { useEffect, useRef } from "react";

type Props = {
  lang?: string;
};

export const CodeBlock: React.FC<Props> = ({ lang = "ts", children }) => {
  const codeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (codeRef.current) {
      window.Prism?.highlightElement(codeRef.current);
    }
  }, []);
  return (
    <pre>
      <code ref={codeRef} className={`line-numbers language-${lang}`}>
        {typeof children === "string" ? children.trim() : children}
      </code>
    </pre>
  );
};
