import "./App.css";
import { PersonList } from "./components/PersonList/PersonList";

function App() {
  let people = [
    { name: "John", age: 25, title: "Developer" },
    { name: "Alice", age: 30, title: "Designer" },
    { name: "Bob", age: 40, title: "Manager" },
    { name: "Emma", age: 22, title: "Intern" },
    { name: "Mark", age: 35, title: "Engineer" },
    { name: "Sarah", age: 27, title: "Marketing" },
    { name: "Tom", age: 32, title: "Product Manager" },
    { name: "Linda", age: 45, title: "Director" },
    { name: "Peter", age: 29, title: "Analyst" },
    { name: "Karen", age: 33, title: "Sales" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PersonList people={people}></PersonList>
    </div>
  );
}

export default App;
