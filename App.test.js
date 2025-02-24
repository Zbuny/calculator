import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// import logo from './logo.svg';
// import React, {useState } from 'react'
// import './App.css';

// function App() {
// const [value, setValue] = useState(' ');
//   return (
//     <div className ="container">
//       <div className ="calculator">
//         <form action="">
//           <div className='display'>
//             <input type="text" value={value}/>
//           </div>
//           <div>
//             <input type="button" value="AC"onClick={e => setValue('')}/>
//             <input type="button" value="DE"onClick={e => setValue(value.slice(0, -1))}/>
//             <input type="button" value="."onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="/"onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="8"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="9"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="*"onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="4"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="5"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="6"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="+"onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="1"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="2"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="3"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="-"onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="00"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="0"onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/>
       
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [value, setValue] = useState('');
//   const handleClick = (e) => {
//     const val = e.target.value;
//     if (['+', '-', '*', '/'].includes(val) && ['+', '-', '*', '/'].includes(value.slice(-1))) {
//       return;
//     }
//     setValue(value + val);
//   };
//   const calculate = () => {
//     try {
//       setValue(eval(value).toString());
//     } catch {
//       setValue('Ошибка');
//       setTimeout(() => setValue(''), 1500);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="calculator">
//         <form action="">
//           <div className="display">
//             <input type="text" value={value} readOnly />
//           </div>
//           <div>
//             <input type="button" value="AC" onClick={() => setValue('')} />
//             <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
//             <input type="button" value="." onClick={handleClick} />
//             <input type="button" value="/" onClick={handleClick} />
//           </div>
//           <div>
//             <input type="button" value="7" onClick={handleClick} />
//             <input type="button" value="8" onClick={handleClick} />
//             <input type="button" value="9" onClick={handleClick} />
//             <input type="button" value="*" onClick={handleClick} />
//           </div>
//           <div>
//             <input type="button" value="4" onClick={handleClick} />
//             <input type="button" value="5" onClick={handleClick} />
//             <input type="button" value="6" onClick={handleClick} />
//             <input type="button" value="+" onClick={handleClick} />
//           </div>
//           <div>
//             <input type="button" value="1" onClick={handleClick} />
//             <input type="button" value="2" onClick={handleClick} />
//             <input type="button" value="3" onClick={handleClick} />
//             <input type="button" value="-" onClick={handleClick} />
//           </div>
//           <div>
//             <input type="button" value="00" onClick={handleClick} />
//             <input type="button" value="0" onClick={handleClick} />
//             <input type="button" value="=" className="equal" onClick={calculate} />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import "./App.css";

// const themes = {
//   blue: {
//     primary: "#00c6ff",
//     background: "linear-gradient(135deg, #0072ff, #00c6ff)",
//     calcBg: "linear-gradient(135deg, #e6f7ff, #b3e5fc)",
//     btnBg: "linear-gradient(135deg, #1e88e5, #00c6ff)",
//     btnText: "#ffffff",
//   },
//   red: {
//     primary: "#ff416c",
//     background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
//     calcBg: "linear-gradient(135deg, #ffe0e0, #ff7eb3)",
//     btnBg: "linear-gradient(135deg, #e91e63, #ff4081)",
//     btnText: "#ffffff",
//   },
//   green: {
//     primary: "#38ef7d",
//     background: "linear-gradient(135deg, #11998e, #38ef7d)",
//     calcBg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
//     btnBg: "linear-gradient(135deg, #4caf50, #66bb6a)",
//     btnText: "#ffffff",
//   },
//   orange: {
//     primary: "#ff8008",
//     background: "linear-gradient(135deg, #ff8008, #ffc837)",
//     calcBg: "linear-gradient(135deg, #ffecb3, #ffd54f)",
//     btnBg: "linear-gradient(135deg, #ff9800, #ff6f00)",
//     btnText: "#ffffff",
//   },
//   black: {
//     primary: "#ffffff",
//     background: "linear-gradient(135deg, #232526, #414345)",
//     calcBg: "linear-gradient(135deg, #3a3a3a, #505050)",
//     btnBg: "linear-gradient(135deg, #616161, #757575)",
//     btnText: "#ffffff",
//   },
// };

// export default function App() {
//   const [theme, setTheme] = useState(themes.blue);
//   const [value, setValue] = useState("");

//   const changeTheme = (color) => {
//     setTheme(themes[color]);
//   };

//   const handleClick = (e) => {
//     const val = e.target.value;
//     if (["+", "-", "*", "/"].includes(val) && ["+", "-", "*", "/"].includes(value.slice(-1))) {
//       return;
//     }
//     setValue(value + val);
//   };

//   const calculate = () => {
//     try {
//       setValue(eval(value).toString());
//     } catch {
//       setValue("Ошибка");
//       setTimeout(() => setValue(""), 1500);
//     }
//   };

//   return (
//     <div style={{ background: theme.background, minHeight: "100vh", padding: "20px" }}>
//       <div
//         style={{
//           background: theme.calcBg,
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <h1 style={{ color: theme.primary, textAlign: "center" }}>Калькулятор</h1>
//         <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
//           {Object.keys(themes).map((color) => (
//             <button
//               key={color}
//               onClick={() => changeTheme(color)}
//               style={{
//                 background: themes[color].btnBg,
//                 border: "none",
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 margin: "5px",
//                 cursor: "pointer",
//               }}
//             />
//           ))}
//         </div>
//         <div className="container">
//           <div className="calculator" style={{ background: theme.calcBg, padding: "20px", borderRadius: "10px" }}>
//             <form>
//               <div className="display">
//                 <input type="text" value={value} readOnly style={{ background: theme.calcBg, color: theme.primary }} />
//               </div>
//               <div>
//                 <input type="button" value="AC" onClick={() => setValue("")} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 <input type="button" value="." onClick={handleClick} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 <input type="button" value="/" onClick={handleClick} style={{ background: theme.btnBg, color: theme.btnText }} />
//               </div>
//               <div>
//                 {["7", "8", "9", "*"].map((val) => (
//                   <input key={val} type="button" value={val} onClick={handleClick} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 ))}
//               </div>
//               <div>
//                 {["4", "5", "6", "+"].map((val) => (
//                   <input key={val} type="button" value={val} onClick={handleClick} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 ))}
//               </div>
//               <div>
//                 {["1", "2", "3", "-"].map((val) => (
//                   <input key={val} type="button" value={val} onClick={handleClick} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 ))}
//               </div>
//               <div>
//                 {["00", "0", "="].map((val) => (
//                   <input key={val} type="button" value={val} onClick={val === "=" ? calculate : handleClick} className={val === "=" ? "equal" : ""} style={{ background: theme.btnBg, color: theme.btnText }} />
//                 ))}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
