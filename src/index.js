import React from 'react'; // React package is imported to handle JSX processing.
import ReactDOM from 'react-dom'; // ReactDOM package is imported to render React components.

import App from './App'; // App component
import './App.css';

// ReactDOM.render(<h1>Jellow World</h1>, document.getElementById('root')); // <h1> is a JSX element and document.** is HTML container.

// const element = <div>Jello World</div>;
// const element = <span>Jello, </span> <span> World</span>; Won't work and you'll get a syntax error telling you must enclose adjacent JSX elements in an enclosing tag.

// Should do this:
/**
const element = <div>
  <span>Hello, </span>
  <span>Jane.</span>
</div>;
ReactDOM.render(element, document.getElementById('root'));
 */

// Evaluating JavaScript expressions in JSX? Use curly braces like this:
/**
const name = "Bobby";
const nameDisplay = <p>Hello, {name}</p>
ReactDOM.render(nameDisplay, document.getElementById('root'));
 */

// or like this:
/**
const user = {
  firstName: "Joe",
  lastName: "Rogan"
}
const userDisplay = <p>Hello bald man, {user.firstName} {user.lastName}</p>
ReactDOM.render(userDisplay, document.getElementById('root'));
 */


// ========== Declaring React Components ========== //
/**
 * We imported the App component(App.js). Then we render App using JSX format, like this: <App/>. 
 * This is required so that JSX can compile it to an element that can be pushed to the React DOM.
 */
ReactDOM.render(<App/>, document.getElementById('root'));

// ========== Styling JSX Elements ========== //

/**
 * Two ways of styling JSX elements: JSX inline styling or External Stylesheets
 * 
 * Example is in App.css && App.js
 * 
 * React styling looks a lot like regular CSS but there are key differences. For example, headerStyle is an object literal.
 * We can't use semicolons like we normally do. Also, a number of CSS declarations have been changed in order to make them
 * compatible with JavaScript syntax. For example, instead of text-decoration, we use textDecoration. Basically, use camel
 * case for all CSS keys except for vendor prefixes such as WebkitTransition, which must start with a capital letter.
 */

 // ========== Stateless vs Stateful Components ========== //

 /**
  * In React, we generally deal with two types of data: props and state. Props are read-only and are set by a parent component.
  * State is defined within a component and can change during the lifecycle of a coponent. Basically, stateless components
  * (also known as dumb components) use props to store data, while stateful components (also known as smart components) use state.
  * 
  * It isn't necesary to use object-oriented syntax for stateless components, especially if you aren't defining a lifecycle function.
  * 
  * Take note that we've removed the Component import in message-view, as this isn't required in teh functional syntax. This style might
  * be confusing at first, but you'll quickly learn it's faster to write React components this way. I've successfully created a stateless
  * React Component. It's not complete, though, as there's a bit more work that needs to be done for it to be properly integrated with a
  * stateful component or container.
  */