---
layout: layouts/post.njk
title: Learning React
metaTitle: Learning React - Some notes I took while completing the Free Code Camp module.
metaDesc: React is a frontend JavaScript framework, these are some note which I took while learning how it works.  
socialImage: 
date: 2020-05-04
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Frontend Libraries
  - blog
---

Learning via [FreeCodeCamp Challenges ↗](https://www.freecodecamp.org/learn/front-end-libraries/react/).

This is not all challenges, only those which I felt the need to note. **This is not a "proper" post, it is more of a brain dump...**

It is code heavy (commented in places to show key concepts), and without much structure. With the code are the few key notes I made.

### Notes on Learning React

A component made with class structure:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  };
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```

 

Components are made from JSX. JSX can be declared immediately without being a component (top of next code block). Components can also be a constant made with a function call which returns JSX (bottom of code block).

```jsx
// JSX
const JSX = <div><h1>Hello World</h1></div>;

// JSX returned from a function
const AnotherComponent = () => {
	return (
		<div>
			<h1>Another Component</h1>
		</div>
	)
};

// Render by calling render on ReactDOM, and passing 1. JSX || Component and 2. Where it should rendered in the document:
ReactDOM.render(JSX, document.getElementById('challenge-node'));
ReactDOM.render(<AnotherComponent />, document.getElementById('challenge-node'));
```

Components can (and often should) return nested components.

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Nested component: */ }
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Nested component: */ }
        <Fruits />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('location-id')
```

**Props** - You can pass *prop*ertie*s* to child components.

```jsx
<App>
  <Welcome user='Mark' />
</App>

// Welcome Component:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

// Example:
const CurrentDate = (props) => {
  return (
    <div>
      { /* prop ref: */ }
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* prop passed: */ }
        <CurrentDate date={Date()} />
      </div>
    );
  }
};

// Example with an array:
const List = (props) => {
  { /* props referred to, with join() added to create legible list */ }
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* props passed as an array of strings */ }
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
				{ /* note use of curly braces */ }
        <List tasks={["walk dog", "workout", "do homework"]}/>
      </div>
    );
  }
};
```

Default props can be set on a component. The component will then render with those props unless they are overwritten when the component is called:

```jsx
const List = (props) => {
  { /* props referred to, with join() added to create legible list */ }
  return <p>{props.tasks.join(", ")}</p>
};

List.defaultProps = {
	tasks: ["walk dog", "workout"]
}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* props passed will overwrite default props */ }
        <List /> { /* Will render with 'walk dog, workout' */}
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "eat cereal", "do homework"]}/> { /* Will render with 'walk dog, eat cereal, do homework' */}
      </div>
    );
  }
};
```

When props are referenced within a call the reference must be prefaced with a 'this.':

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* props ref (within class, has a 'this.'): */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Props assigned: */ }
          <ReturnTempPassword tempPassword='123456789' />
        </div>
    );
  }
};
```

Useful props things - you can also declare `propTypes` on a component. Below means that the component expects a `name` prop, which is of type: string, and which is required. Errors will be thrown if those req are not met.

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

const Camper = (props) => {
  return (
    <p>{props.name}</p>
  )
};

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
}
```

A **stateless functional component** is any function you write which accepts props and returns JSX. A **stateless component**, on the other hand, is a class that extends `React.Component`, but does not use internal state (covered in the next challenge). Finally, a **stateful component** is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to *minimize statefulness* and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

**State** - You can give class constructed components a state, which can be a simple or complex object. The `render()` method will always have access to the data in the state, and can be referenced with `this.state.key`.

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name: 'Zachary'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

The state can be referred to locally, within the class, inside the `render()` method as normal JavaScript. Then referred to as JSX within the return statement:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Referred to directly in JS:
    const name = this.state.name;
  
    return (
      <div>
        { /* referenced in return statement with JSX braces: */ }
        <h1>{name}</h1>
      </div>
    );
  }
};
```

The state can be altered using the `setState()` method called within the component. This method is passed an object with `k: v` pairs. Below a click of a button calls the `handleClick()` method (defined in the same component) which uses `setState()` to update the state. So on load the `h1` displays 'Initial State', and on click it updates to 'React Rocks!'.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      name: 'React Rocks!'
    })
    // change code above this line
  }
  render() {
    return (
      <div>
				{/* Note how the function is referenced: */}
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

Note that the `handleClick()` method needs to use the `this` keyword to access properties of the class. The `this` keyword must be bound to the class method. One common way is to explicitly bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized.

The above example uses `this.handleClick = this.handleClick.bind(this)` for its `handleClick` method in the constructor. Then, when you call a function like `this.setState()` within your class method, `this` refers to the class and will not be undefined... (Might want to read up more on how `this` works in JavaScript?)

When using state to toggle an element, you can't rely on `this.state` or `this.props` to give you the correct current value. Instead, pass `setState()` a function with access to `state` and/or `props`. You should not use the first example, but instead the second:

```jsx
// Don't use this:
this.setState({
  counter: this.state.counter + this.props.increment
});

// Use this:
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Or this, if you only need access to state:
this.setState(state => ({
  counter: state.counter + 1
}));
```

Note the parentheses around the object literal. This is necessary in react.

A counter:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // bind 'this' to functions
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  // functions:
  increment() {
    this.setState(state => ({
      count: state.count+1
    }))
  };
  decrement() {
    this.setState(state => ({
      count: state.count-1
    }))
  };
  reset() {
    this.setState(state => ({
      count: 0
    }))
  };
  // render:
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

Controlled input - usually in React components a form input is controlled by a component - the input is added to the state as the user types so that it becomes accessible:

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // bind 'this' keyword to function
    this.handleChange = this.handleChange.bind(this);
  }
  // function with access to 'event' which is passed on user input
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        { /* input with value ref to state and function call for onChange (ie. as user types) */}
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
				{ /* This value changes as the user types too: */ }
        <p>{this.state.input}</p>
      </div>
    );
  }
};

// And with a form and submit:

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Note: prevention of default behaviour on submit:
    event.preventDefault();
    this.setState(state => ({
      submit: this.state.input
    }))
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* Same as above */ }
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        { /* Below accesses state only once submit has a value: */ }
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
```

Passing state (or part of state) as a prop to a component:

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
				 {/* prop passed from state: */}
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
			{/* prop used: */}
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};
```

Contrived example of passing a callback as a prop to a component. This way the `MyApp` component remains the only **stateful component** and the other components remain **stateless**.

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* the input is passed from state, but crucially the function is passed to handleChange too: */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
        
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

Adding event listeners to document using `componentDidMount()` and removing them using `componentWillUnmount()`:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // event listener:
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  // functionality:
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
	// render:
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

Normally every time the props are updated the component is refreshed on the page, even if this is unnecessary. You can limit updates by using `shouldComponentUpdate(nextProps, nextState)` which expects a boolean to determine action. It has access to the `nextProps` and `nextState` - each has a `value` which can be compared to `this.props` or `this.state`:

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?', nextProps);
     // check to see if value of nextProps is even and return boolean
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```

Styles can be set via CSS by adding `className` to JSX elements. Note the camel case, which is different from HTML's use of `class`.

You can also apply styles inline, but need to adhere to JSX syntax rather than HTML. The styles need to be applied as an object, and again with camelCase:

```jsx
{% raw %}
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: 'red', fontSize: '72'}}>Big Red</div>
    );
  }
};
{% endraw %}
```

Styles can also be assigned to a const and referred to in the component:

```jsx
const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple'
}
// change code above this line
class Colorful extends React.Component {
  render() {
    // reference to 'styles' const:
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};
```

Standard JavaScript is valid in the render method, and so can be used to create conditional outcomes for the component based on the state. This can be done with a standard `if / else` statement wrapped around the return statement.

Conditional outcomes can also be used via the logical `&&` operator. This can be better because it does not result in any repeated code. The below example achieves the same thing a using an if/else statement in half the amount of code:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
	// Logic for toggle to switch between true and false:
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
		// Could use an if/else statement here...
    // The h1 tag will only be displayed if 'this.state.display' == true:
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

One other way to use conditional logic within the return statement (or within plain JSX) is to use the ternary operator. The example below displays a different button (of 3) depending on if the user has input anything, and then what they have input.

```jsx
class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // init state to empty values
    this.state = {
      input: '',
      userAge: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
	// on submit update userAge to the user input value
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
	// 3 options of button to render
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
				{/* Use of JSX {} to input ternary making choice of button to display */}
        {
          this.state.userAge === ''
          ? buttonOne
          : this.state.userAge < 18
            ? buttonThree
            : buttonTwo
        }
      </div>
    );
  }
};
```

A Game of Chance example:

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return h1 is based on prop passed from GameOfChance
    return (
      <h1>
      {
        this.props.fiftyFifty ? 'You Win!' : 'You Lose!'
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random() >= .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* Add Results component with prop */ }
        <Results fiftyFifty={expression}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```

Conditional Styles example:

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // conditional style:
    if (this.state.input.length > 15) {
      inputStyle = {
        border: '3px solid red'
      }
    }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

Mapping an array and outputting to a component. No knowledge of array content is necessary.

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(i => {
    return <li key={i}>{i}</li>
  }); // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

In React while rendering a list like this you also need to specify a unique key for each item.

Another example which filters data from the state, and then maps over that new array:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);
    const renderOnline = usersOnline.map(i => {
      return <li key={i.username}>{i.username}</li>;
    })
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
```