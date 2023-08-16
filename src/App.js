import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import data from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <div className="card-list">
        {data.map((location, index) => (
          <Card key={index} {...location} />
        ))}
      </div>
    </div>
  );
}

export default App;
