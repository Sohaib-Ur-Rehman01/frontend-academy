import { useState } from "react";
import "../components/css/blogSection.css";
export default function CodeBlock({ language = "CSS", code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2s baad reset
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="codeimage">
      <div className="code-block">
        <div className="code-header">
          <span>{language}</span>
          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
            aria-label="Copy Code"
          >
            {copied ? (
              <span>✅ Copied!</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 
                     2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
                     16H8V7h11v14z"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <pre>
          <code className={`language-${language.toLowerCase()}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
