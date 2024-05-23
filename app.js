const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is Rendered"),
    React.createElement(
      Person,
      { name: "Aviwe", occupation: "Software Developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Vuyo", occupation: "Software Developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Mbuzeli", occupation: "Software Developer" },
      null
    ),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
