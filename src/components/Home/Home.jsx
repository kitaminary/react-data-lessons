import './Home.scss';

export const Home = (props) => {

  return <div className='block'>
    <h1 className='block__text'>Example</h1>
    <p>Counter is: {props.counter}</p>
  </div>;
};

// or

// export const Home = ({counter}) => {

//     return <div>
//       <h1>Example</h1>
//       <p>Counter is: {counter}</p>
//     </div>;
//   };