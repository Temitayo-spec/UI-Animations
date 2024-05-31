import { motion } from 'framer-motion';
import { JSXElementConstructor } from 'react';

const calculateRandomBlockDelays = (rowIndex: number, totalRows: number) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;

  return blockDelay + rowDelay;
};

// const Transition = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       {children}
//       <div className="blocks__container transition__in">
//         {Array.from({ length: 10 }).map((_, rowIndex) => (
//           <div className="row" key={rowIndex}>
//             {Array.from({ length: 11 }).map((_, blockIndex) => (
//               <motion.div
//                 className="block"
//                 key={blockIndex}
//                 initial={{ scaleY: 1 }}
//                 animate={{ scaleY: 0 }}
//                 exit={{ scaleY: 0 }}
//                 transition={{
//                   duration: 1,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: calculateRandomBlockDelays(rowIndex, 10),
//                 }}
//               ></motion.div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="blocks__container transition__out">
//         {Array.from({ length: 10 }).map((_, rowIndex) => (
//           <div className="row" key={rowIndex}>
//             {Array.from({ length: 11 }).map((_, blockIndex) => (
//               <motion.div
//                 className="block"
//                 key={blockIndex}
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: 0 }}
//                 exit={{ scaleY: 1 }}
//                 transition={{
//                   duration: 1,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: calculateRandomBlockDelays(rowIndex, 10),
//                 }}
//               ></motion.div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Transition;
const Transition = (Page: JSXElementConstructor<unknown>) => {
  return () => (
    <>
      <Page />
      <div className="blocks__container transition__in">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                className="block"
                key={blockIndex}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelays(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="blocks__container transition__out">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                className="block"
                key={blockIndex}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelays(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;
