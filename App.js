/*
<div id="root">
    <div id="parent">
        <div id="child1">
        <h1>I am an h1 tag</h1>
        <h1>I am an h2 tag</h1>
        </div>
        <div id="child2">
        <h1>I am an h1 tag</h1>
        <h1>I am an h2 tag</h1>
        </div>
    </div>
</div>
*/

const element = React.createElement("div", {id: "parent"},
    [
        React.createElement("div", {id: "child1"},
           [React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag")
        ]),
        React.createElement("div", {id: "child2"},
            [React.createElement("h1", {}, "I am an h1 tag"),
                React.createElement("h2", {}, "I am an h2 tag")
            ])
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(element);
root.render(element)