import Person from "../Person/Person";
import "./PersonList.scss";
import uniqid from "uniqid";

export const PersonList = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <Person key={uniqid()} person={person} />
      ))}
    </ul>
  );
};

// or

// export const Home = ({counter}) => {

//     return <div>
//       <h1>Example</h1>
//       <p>Counter is: {counter}</p>
//     </div>;
//   };
