// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";

// export default function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const skills = [
//     { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
//     { icon: <FaNodeJs size={40} color="#68A063" />, name: "Node.js" },
//     { icon: <FaHtml5 size={40} color="#e34c26" />, name: "HTML5" },
// //   ];

//   return (
//     <div className="relative">
   
//       <main className="min-h-screen flex flex-col items-center justify-center gap-8 pt-24">
//         <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
//         <div className="relative w-[300px] h-[300px]">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               animate={{
//                 x: 120 * Math.cos((index / skills.length) * 2 * Math.PI),
//                 y: 120 * Math.sin((index / skills.length) * 2 * Math.PI),
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 8,
//                 ease: "linear",
//               }}
//             >
//               {skill.icon}
//             </motion.div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
