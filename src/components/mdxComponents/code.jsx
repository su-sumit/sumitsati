// import React from "react";
// import Highlight from "prism-react-renderer";

// const CodeBlock = ({ children, className }) => {
//   const language = className ? className.replace(/language-/, "") : "";

//   return (
//     <Highlight
//       code={children}
//       language={language}
//     >
//       {({ className, style, tokens, getLineProps, getTokenProps }) => (
//         <pre className={className} style={{ ...style, padding: "20px" }}>
//           {tokens.map((line, i) => (
//             <div key={i} {...getLineProps({ line, key: i })}>
//               {line.map((token, key) => (
//                 <span key={key} {...getTokenProps({ token, key })} />
//               ))}
//             </div>
//           ))}
//         </pre>
//       )}
//     </Highlight>
//   );
// };

// export default CodeBlock;