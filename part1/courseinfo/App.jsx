const App = () => {
  const course = {
    name: "Half Stack Application Development",
    part: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    );
  };

  const Part = (props) => {
    console.log(props);
    return (
      <div>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </div>
    );
  };

  const Content = (props) => {
    console.log(props);
    return (
      <div>
        <Part part={props.part[0]} />
        <Part part={props.part[1]} />
        <Part part={props.part[2]} />
      </div>
    );
  };

  const Total = (props) => {
    console.log(props);
    return (
      <div>
        <p>
          Number of exercises{" "}
          {props.part[0].exercises +
            props.part[1].exercises +
            props.part[2].exercises}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content part={course.part} />
      <Total part={course.part} />
    </div>
  );
};

export default App;
