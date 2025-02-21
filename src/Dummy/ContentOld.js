// import React from "react";
// import { useState } from "react"; // Hooks must be used within curly brackets


// function Content() {
//   // function greetRandom(){
//   //   const greetings = ["Hello", "Hai", "Hi", "Vanakkam", "Welcome"]
//   //   let rand = Math.floor(Math.random()*5)
//   //   return greetings[rand];
//   // }
//   // let count = 0;
//   // const displayCount = (count, e)=> {
//   //   console.log(e)
//   //   console.log(e.target)
//   //   console.log(count);
//   // }
//   const [greeting, setGreeting] = useState("Hai");
//   const  greetRandom = () => {
//     const greetings = ["Hello", "Hai", "Hii", "Vanakkam", "Welcome"]
//     let rand = Math.floor(Math.random()*5)
//     setGreeting(greetings[rand])
//   }
//   const [count, setCount] = useState(99);
//   function inc(){
//     setCount((count) => count + 1) 
//   }
//   function dec(){
//     setCount(count - 1)
//   }

//     return (
//       <main>
//         <p onClick={greetRandom}>{greeting} Guys</p>
//         <button onClick={dec}>-</button>
//         <p>{count}</p>
//         <button onClick={inc}>+</button>
//       {/* <p  onDoubleClick={(e) => displayCount(count++,e)}>{greetRandom()} guys</p>
//       <button onClick={(e) => displayCount(count++,e)}>Count</button>
//       <button></button> */}
//       </main>
//     );
// }

// export default Content