import img1 from "./img/11.jpeg";
import img2 from "./img/22.jpg";
import img3 from "./img/33.jpeg";
import img4 from "./img/44.jpeg";
import img5 from "./img/55.jpeg";
import './App.css';

function App() {
  return (
    <div className="block">
      <div className="blockk">
        <img src={img1}/>
        <h1 className="fontt">Hey</h1>
      </div>
        <div className="blockk">
      < img src={img2}/>
      <h1 className="fontt">Let's</h1>
      </div>
      <div className="blockk">
        <img src={img3}/>
        <h1 className="fontt">Give</h1>
      </div>
      <div className="blockk">
        <img src={img4}/>
        <h1 className="fontt">All</h1>
      </div>
      <div className="blockk">
        <img src={img5}/>
        <h1 className="fontt">You Can</h1>
      </div>
    </div>
  );
}

export default App;
