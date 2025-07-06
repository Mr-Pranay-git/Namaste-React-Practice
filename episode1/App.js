/*
  <div id="parent">
    <div id="child">
    <h1></h1>
    </div>
    </div>
*/


const parent = React.createElement(
    "div",
    {id:"parent"},  
    React.createElement(
        "div",
        {id:"child"}, 
        React.createElement("h1",
            {id: "sub-child"},
            "I'm an h1 tag")
        )
);


const heading = React.createElement(
    "h1",
    {id: "heading"}, 
    "Hello World from React!"
);
console.log(heading); // this will return  object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

