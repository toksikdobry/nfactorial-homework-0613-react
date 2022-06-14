import img1 from "./img/11.jpeg";
import img2 from "./img/22.jpg";
import img3 from "./img/33.jpeg";
import img4 from "./img/44.jpeg";
import img5 from "./img/55.jpeg";
import icon from "./img/icon.png"
import './App.css';

let today = new Date();
let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
let time =  today.getHours() + ":" + today.getMinutes();
let dateTime = date + ' ' +  time;

function App() {
  return (
    <div className="divv">
      <header className="headerr">
        <div className="div2">
          <img src={icon} className="icon"/>
          <input type="text" className="formm"/>
         </div>
        <div className ="datetime"><h1>{dateTime}</h1></div>
      </header>
      <div className="block">
        <div className="blockk">
          <img src={img1} className="pic"/>
          <h1 className="fontt">Hey</h1>
        </div>
          <div className="blockk">
        < img src={img2} className="pic"/>
        <h1 className="fontt">Let's</h1>
        </div>
        <div className="blockk">
          <img src={img3} className="pic"/>
          <h1 className="fontt">Give</h1>
        </div>
        <div className="blockk">
          <img src={img4} className="pic"/>
          <h1 className="fontt">All</h1>
        </div>
        <div className="blockk">
          <img src={img5} className="pic"/>
          <h1 className="fontt">You Can</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
