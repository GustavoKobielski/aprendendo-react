import React from "react"; // para classe

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import articleImg from "./assets/images/download.png";
import articleImg2 from "./assets/images/dowload2.png";
import articleImg3 from "./assets/images/dowload3.png";
import articleImg4 from "./assets/images/dowload4.png";
import { Counter } from "./components/Counter/counter";

// function App() {
//   return (
//     <div>
//       <h1>Aprendendo React</h1>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />

      <Counter />

      <section id="articles">
        <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg}/>

        <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg2} />

        <Article title="36 Days of Malayalam type" provider="Spaceflight Now" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg3} />

        <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg4} />
      </section>

      </>
    );
  }
}

export default App;
