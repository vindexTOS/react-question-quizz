export interface Questions {
  question: string
  correct: string
  answers: string[]
  lvl: string
}

const questions: Questions[] = [
  {
    question: 'What is React? ',
    correct:
      'React is an open-source front-end JavaScript library that is used for building composable user interfaces React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook s News Feed in 2011 and on Instagram in 2012.',
    answers: [
      `React is an open-source front-end JavaScript library that is used for building composable user interfaces React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook s News Feed in 2011 and on Instagram in 2012.`,
      `

   React is an open-source back-end JavaScript library that is used for building composable back end React was
    created by Jordan Walke, a software engineer working for Google. 
   React was first deployed on Google s News Feed in 2009 and on Youtube in 2012.`,
      ` React is an Python library that is used for building 2D video games`,
      ` React is an Javascript Run Time module `,
    ],
    lvl: 'easy',
  },
  {
    question: `What are the major features of React?`,
    correct: `1. Uses JSX syntax, a syntax extension of JS 
    that allows developers to write HTML in their JS code.
    2.It uses VirtualDOM instead of RealDOM
     considering that RealDOM manipulations are expensive.
    3.Supports server-side rendering.
    4.Follows Unidirectional data flow or data binding.
    5.Uses reusable/composable UI components to develop the view.`,
    answers: [
      `1. Uses JSX syntax, a syntax extension of JS 
    that allows developers to write HTML in their JS code.
    2.It uses VirtualDOM instead of RealDOM
     considering that RealDOM manipulations are expensive.
    3.Supports server-side rendering.
    4.Follows Unidirectional data flow or data binding.
    5.Uses reusable/composable UI components to develop the view.`,
      `1. It uses RealDOM and calls elements with getElementById or getElementByClass
    2. Supports server-side rendering
    3. Follows two-way binding
    4. Uses Objective orianted programing`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is JSX?`,
    correct: `JSX stands for JavaScript XML and it is an XML-like
    syntax extension to ECMAScript. 
   Basically it just provides syntactic sugar for the 
   React.createElement() function, giving us 
   expressiveness of JavaScript along with HTML like template syntax.`,
    answers: [
      `JSX stands for JavaScript XML and it is an XML-like
    syntax extension to ECMAScript. 
   Basically it just provides syntactic sugar for the 
   React.createElement() function, giving us 
   expressiveness of JavaScript along with HTML like template syntax.`,
      `JSX stands for JavaScript XSS aka cross site scripting (XSS),
   security exploit which allows an attacker to inject into a website malicious 
   client-side code. This code is executed by the victims and lets the attackers 
   bypass access controls and impersonate users`,
    ],
    lvl: `easy`,
  },

  {
    question: `What are two most used hooks`,
    correct: `useState and UseEffect`,
    answers: [
      `useState and UseEffect`,
      `useRef and useReducer`,
      `useContext and useMemo`,
      `useState and useCallback`,
    ],
    lvl: `easy`,
  },
  {
    question: `let's imagine i have two components where A is the parent of B. How can i let B know about state that lives in A?`,
    correct: `prop drilling,context API or 3th party state managment`,
    answers: [
      `prop drilling,context API or 3th party state managment`,
      `useMemo,memo and useEffect`,
      `React does not uses multiple components such as parent and children`,
    ],
    lvl: `easy`,
  },
  {
    question: `why would someone use the useEffect hook?`,
    correct: `execute a function or a logic after component mounts or when listener in dependency array changes`,
    answers: [
      `execute a function or a logic after component mounts or when listener in dependency array changes`,
      `manage global states to pass down the children components`,
      `make a loop to re update DOM everytime page reloads`,
    ],
    lvl: `medium`,
  },
  {
    question: `if you need to set up a fully client-side rendered SPA with React,what toolchain would you use ?`,
    correct: `create react app`,
    answers: [
      `create react app`,
      `use Redux Tool kit for state`,
      `download material UI for client-side interface`,
      `install Nodejs`,
    ],
    lvl: `hard`,
  },
  {
    question: `why would someone use React?`,
    correct: `It uses VirtualDOM instead of RealDOM  with makes native user-like experiences`,
    answers: [
      `It uses VirtualDOM instead of RealDOM  with makes native user-like experiences`,
      `To make back and database for encrypted messages`,
      `It uses RealDOM instead of VirtualDOM   with makes native user-like experiences`,
    ],
    lvl: `easy`,
  },
  {
    question: `If you want to redirect a user to another page on a button click how would you go over implementing this?`,
    correct: `using Link tag or useNavigate hook from react-router-dom`,
    answers: [
      `using Link tag or useNavigate hook from react-router-dom`,
      'using html (a) teg and specific route link in href',
      `using XML link tag`,
      `React does not allows users to be redirected to different page because virtual DOM rerenders JSX on same page`,
    ],
    lvl: `medium`,
  },

  {
    question: `What is the difference between HTML and XHTML?`,
    correct: `HTML is the standard markup language for creating web pages, while XHTML is a stricter and more standardized version of HTML. Both HTML and XHTML include a wide range of features,such as support for multimedia, styling, and scripting.`,
    answers: [
      `HTML is the standard markup language for creating web pages, while XHTML is a stricter and more standardized version of HTML. Both HTML and XHTML include a wide range of features,such as support for multimedia, styling, and scripting.`,
      'HTML is mark up Language while XHTML is javascript front-end frame-work',
      `XHTML markup library for CSS like bootstrap`,
      ` XHTML does not uses classical body, div, h1 , etc tegs instad it only uses Textarea and Box tegs `,
    ],
    lvl: `easy`,
  },
  {
    question: `What is the difference between a class and an ID in CSS? `,
    correct: `ID is specific to a single element,classes can be assigned to multiple elements on a page or throughout the website`,
    answers: [
      `ID is specific to a single element,classes can be assigned to multiple elements on a page or throughout the website`,
      `ID can be used to target element with javascript while class  is unable to be dargeted `,
      `ID is used to conect label element and input element`,
      `ID is randomized character that we label objects, class is used for objected programing`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is responsive design?`,
    correct: `allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices.`,
    answers: [
      `allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices.`,
      `make http requests on all devices`,
    ],
    lvl: `easy`,
  },
  {
    question: `How does the box model work in CSS?`,
    correct: `The CSS Box Model is a term used for the container that wraps the following element properties within it.Margin,Border,Padding,Content,Height and Width`,
    answers: [
      `The CSS Box Model is a term used for the container that wraps the following element properties within it.Margin,Border,Padding,Content,Height and Width`,
      `Display models such as display:flex; display:grid; , display:block; etc, it is used to make responsive web deisgn`,
      `Box model works only in SCASS and it is not CSS proparty`,
    ],
    lvl: `medium`,
  },
  {
    question: `What are pseudo-classes in CSS?`,
    correct: `adding extra styling without modefying HTML or using js such as hover or click animations`,
    answers: [
      `adding extra styling without modefying HTML or using js such as hover or click animations`,
      `Way for javascript to target individual elements by using document.targetelementByClass`,
      `pseudo-classes are used for responsive web deisgn`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is the difference between margin and padding in CSS?`,
    correct: `a margin is the space around an element's border,while padding is the space between an element's border and the element's content`,
    answers: [
      `a margin is the space around an element's border,while padding is the space between an element's border and the element's content`,
      `a margin only works on the elements with absolute position while padding works on both`,
      `a padding is the way to resize elements Y angle while a margin is used for X `,
    ],
    lvl: `medium`,
  },
  {
    question: `How do you optimize a website's performance?`,
    correct: `reduce https requests, compress img size make it webpg instad of jpg, use memo(),useMemo() and/or useCallback() hooks from React`,
    answers: [
      `reduce https requests, compress img size make it webpg instad of jpg, use memo(),useMemo() and/or useCallback() hooks from React`,
      `by installing state managment library Redux`,
      `by using yarn instad of npm for installing react`,
    ],
    lvl: `easy`,
  },
  {
    question: `What are the benefits of using a CSS preprocessor?`,
    correct: `CSS preprocessors make it easy to automate repetitive tasks,reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility`,
    answers: [
      `CSS preprocessors make it easy to automate repetitive tasks,reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility`,
      `to optimize website's performance`,
      `to make easier responsive deisgn`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is the difference between inline, inline-block, and block elements?`,
    correct: `inline element takes less place on the screen block element pushes out everything and takes whole width of the screen inline-block is same as inline but you can modifey its width and height `,
    answers: [
      `inline element takes less place on the screen block element pushes out everything and takes whole width of the screen inline-block is same as inline but you can modifey its width and height `,
      `inline makes grid for the elements, block makes row from the elements while inline-block makes columes`,
      `block element can only take one children element, inline element can only be initialized inside of the other parent element, inline-block is same as inline element but can only take one child`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is the difference between span and div elements?`,
    correct: `div is block element so it takes up whole width of the screen span is inline elment so it take less place possible`,
    answers: [
      `div is block element so it takes up whole width of the screen span is inline elment so it take less place possible`,
      `span cant be animated`,
      `span can only be used inside of the text teg elments such as p or h1 tegs`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is the difference between Element and Component? `,
    correct: `An element is a object describing what you want to appear on the screen in therms of the DOM nodes or other componets, element can containe other elements in their props , after its creation it cannot be  mutated, Whereas a component  can be declaraed in serveral different ways. it can be a class or function that will return JSX tree`,
    answers: [
      `An element is a object describing what you want to appear on the screen in therms of the DOM nodes or other componets, element can containe other elements in their props , after its creation it cannot be  mutated, Whereas a component  can be declaraed in serveral different ways. it can be a class or function that will return JSX tree`,
      `An element is an HTML tag while component is CSS class`,
      `An element can be created inside of the function or class , element can containe other elements in their props , after its creation it can be  mutated, Whereas a component  can be declaraed  only at top level once and it returns DOM node`,
    ],
    lvl: `hard`,
  },
  {
    question: `How to create components in React?`,
    correct: `There is two ways to create React components,either with defineing pure JS functional component that takes props and returns JSX or ES6 class component`,
    answers: [
      `There is two ways to create React components,either with defineing pure JS functional component that takes props and returns JSX or ES6 class component`,
      `There is two ways to create React component, either with calling document.getElementById or document.getElementByClass  `,
      `By creating a reducer function and returning JSX from it while passing props through action.payload`,
    ],
    lvl: `easy`,
  },
  {
    question: `When to use a Class Component over a Function Component?`,
    correct: `If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.`,
    answers: [
      `If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.`,
      `To do server side rendering`,
      `If you are trying to avoide using useEFfect`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is state in React? `,
    correct: `State is an object that holds some information that may change over the lifetime of the component, whenever the state object changes, the component re-renders.`,
    answers: [
      `State is an object that holds some information that may change over the lifetime of the component, whenever the state object changes, the component re-renders.`,
      `State is an array that holds some JSX elements that may change over the lifetime of the component, whenever the state array changes, the DOM re-renders.`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is the DOM?`,
    correct: `DOM stands for Document Object Model. it provides a tree-like structure representation of HTML, XML, and other document types.
    the browser creates a DOM of the page, which allows JavaScript to access and manipulate the elements on the page.
   The changes you make to the DOM are then reflected on the web page, allowing you to create dynamic and interactive web applications.`,
    answers: [
      `DOM stands for Document Object Model. it provides a tree-like structure representation of HTML, XML, and other document types.
    the browser creates a DOM of the page, which allows JavaScript to access and manipulate the elements on the page.
   The changes you make to the DOM are then reflected on the web page, allowing you to create dynamic and interactive web applications.`,
      `DOM stands for Data Object Model, and it is used for storing and retrieving data from a database`,
      `The DOM is a feature of server-side programming languages such as PHP and ASP.NET, and it is not used in client-side web development.`,
    ],
    lvl: `medium`,
  },
  {
    question: `What is the virtual DOM and how does it work in React?`,
    correct: `The Virtual DOM is a concept used in React to optimize the rendering of user interfaces. It is an in-memory representation of the actual DOM, which is a tree-like structure that represents the elements and attributes of an HTML or XML document.
    The Virtual DOM in React optimizes UI rendering by updating only the parts of the actual DOM that need to be changed, making updates faster and more efficient.`,
    answers: [
      `The Virtual DOM is a concept used in React to optimize the rendering of user interfaces. It is an in-memory representation of the actual DOM, which is a tree-like structure that represents the elements and attributes of an HTML or XML document.
    The Virtual DOM in React optimizes UI rendering by updating only the parts of the actual DOM that need to be changed, making updates faster and more efficient.`,
      `The Virtual DOM is a physical component that you can add to a web page to enhance its functionality.`,
      `The Virtual DOM is a type of styling language used in React to make websites look more modern and visually appealing.`,
    ],
    lvl: `medium`,
  },
  {
    question: `What is the difference between the useCallback and useMemo hooks in React?`,
    correct: `Both the useCallback and useMemo hooks are used to optimize the performance of React components,
      The useCallback hook is used to memoize a function and prevent it from being re-created on each render.
    The useMemo hook is used to memoize a value and prevent it from being re-computed on each render.  
     while useCallback is used to memoize a function and useMemo is used to memoize a value.`,
    answers: [
      `Both the useCallback and useMemo hooks are used to optimize the performance of React components,
    The useCallback hook is used to memoize a function and prevent it from being re-created on each render.
  The useMemo hook is used to memoize a value and prevent it from being re-computed on each render.  
   while useCallback is used to memoize a function and useMemo is used to memoize a value.`,
      `The useCallback hook is used to memoize a value and prevent it from being re-computed on each render, while useMemo is used to memoize a function.`,
      `The useCallback hook is used to prevent unnecessary re-renders of a component, while useMemo is used to control the component's state updates.`,
    ],
    lvl: `easy`,
  },
  {
    question: `What is event bubbling in JavaScript?`,
    correct: `Event bubbling is a process in which an event that is triggered on an inner element (such as a button or link) is propagated up through its parent elements in the DOM tree until it reaches the top-level element, such as the document or window. This allows event handlers attached to parent elements to also handle the event, in addition to any handlers attached to the original inner element.`,
    answers: [
      `Event bubbling is a process in which an event that is triggered on an inner element (such as a button or link) is propagated up through its parent elements in the DOM tree until it reaches the top-level element, such as the document or window. This allows event handlers attached to parent elements to also handle the event, in addition to any handlers attached to the original inner element.`,
      `Event bubbling is a process in which events can be triggered multiple times on the same element, causing them to "bubble up" and trigger the same event handlers repeatedly.`,
      `Event bubbling is a process in which events are prevented from propagating up through the parent elements of the DOM tree, allowing them to be handled only by the element on which they were triggered.`,
    ],
    lvl: `hard`,
  },
  {
    question: `What is a closure in JavaScript?`,
    correct: `Functions in JavaScript can be defined inside other functions, and when a function is defined inside another function, it has access to the outer function's variables and parameters. This is known as closure in JavaScript.`,
    answers: [
      `Functions in JavaScript can be defined inside other functions, and when a function is defined inside another function, it has access to the outer function's variables and parameters. This is known as closure in JavaScript.`,
      `A closure is a variable that is declared inside a function and can be accessed from outside the function.`,
      `A closure is a function that can be called from another function, but does not have access to the variables or parameters of the outer function.`,
    ],
    lvl: `medium`,
  },
]

export default questions

// {
//     question:` `,
//     correct:` `,
//     answers:[],
//     lvl:` `
// }

// What is the box model in CSS, and how does it work?
// Answer: The box model is the way in which CSS defines the layout and sizing of elements on a web page. Each element is represented as a rectangular box, with content, padding, borders, and margins that determine its overall size and position.

// Potential responses:

// (correct) The box model in CSS refers to the way in which elements on a web page are laid out and sized. It includes the element's content, padding, borders, and margins.
// The box model is the set of rules that determine how elements are stacked on a page, and how they interact with each other.
// The box model is a fundamental concept in web development that defines how elements are structured on a page, and how they respond to changes in the viewport.
// The box model in CSS can be a bit tricky to master, but it's an essential concept for building effective layouts and designs.
// What are some common ways to optimize website performance?
// Answer: Website performance optimization involves a range of strategies for improving the speed, responsiveness, and overall user experience of a site. Some common techniques include optimizing images and other assets, minimizing HTTP requests, using browser caching, and compressing files and data.

// Potential responses:

// (correct) There are many strategies for optimizing website performance, including minimizing HTTP requests, compressing files, and using browser caching.
// To optimize website performance, you can use techniques like image optimization, minification, and code splitting to reduce load times and improve page speed.
// One of the most effective ways to optimize website performance is to use a content delivery network (CDN) to distribute content across multiple servers.
// Website performance optimization is an ongoing process that involves constantly monitoring and tweaking your site to ensure it's as fast and responsive as possible.
// How do you handle cross-browser compatibility issues when developing for the web?
// Answer: Cross-browser compatibility issues can arise when different web browsers interpret HTML, CSS, and JavaScript code in slightly different ways. To address these issues, developers can use techniques like feature detection, polyfills, and graceful degradation.

// Potential responses:

// (correct) Cross-browser compatibility issues can be a challenge, but you can address them by using feature detection and fallback techniques like polyfills and graceful degradation.
// To ensure cross-browser compatibility, it's important to test your site in multiple browsers and devices, and to use modern web standards and best practices.
// One way to handle cross-browser compatibility is to use a CSS preprocessor like Sass or Less, which can automatically generate vendor prefixes and other cross-browser code.
// Cross-browser compatibility issues can be frustrating, but by using techniques like feature detection and progressive enhancement, you can ensure that your site works well across a range of browsers and devices.
// What is the difference between a class and an ID in CSS?
// Answer: In CSS, classes and IDs are used to apply styles to specific elements on a web page. The main difference between them is that IDs are unique identifiers that can only be used once on a page, while classes can be used multiple times.

// Potential responses:

// (correct) The main difference between classes and IDs in CSS is that IDs are unique identifiers that can only be used once on a page, while classes can be used multiple times.
// In CSS, classes are used to apply styles to multiple elements that share the same characteristics, while IDs are used to target a single, unique element on a page.
// One advantage of using classes over IDs is that you can apply styles to multiple elements at once, which can save time and streamline your CSS code.
// Classes and IDs are both important tools for applying styles to elements on a

// That's correct, but there's more to it than that! The main difference between props and state in React is that props are used to pass data from a parent component to a child component, whereas state is used to manage data within a single component.

// Props are read-only and should not be modified by the child component. On the other hand, state is mutable and can be changed using the setState method.

// Another key difference is that props are passed down from parent to child components, whereas state is always contained within a single component.

// Great job so far! Here's your next question:

// Good answer! A React component is a reusable piece of UI that can be composed with other components to build complex user interfaces. There are two main types of React components: class components and functional components. Class components are created using the ES6 class syntax and have additional features such as lifecycle methods, while functional components are just plain JavaScript functions that return JSX. Both types of components can accept props as inputs and return JSX to define the user interface.

// Components are the building blocks of a React application and can be reused across multiple parts of an application. Keep up the good work! Here's your next question:

// That's a good start! React hooks are actually a way to add state and other features to functional components, which previously could not have state or lifecycle methods. React hooks were introduced in React 16.8 as a way to simplify and streamline the development of React components.

// Hooks provide a way to reuse stateful logic between components and to manage component lifecycle events in functional components. Some commonly used hooks include useState, useEffect, useContext, and useCallback.

// The useEffect hook in React is used to manage side effects in functional components. Side effects are any actions that affect something outside of the component, such as fetching data from an API, updating the document title, or setting up event listeners.

// The useEffect hook takes two arguments: a function and a dependency array. The function is the side effect that you want to perform, and the dependency array is an optional array of values that the effect depends on. The effect will be re-run whenever any value in the dependency array changes.

// The useEffect hook is typically used to replace the lifecycle methods in class components, such as componentDidMount, componentDidUpdate, and componentWillUnmount. Great job so far! Here's your next question:

// Redux is a popular state management library for JavaScript applications, including React. It provides a predictable way to manage application state by using a single global store and a set of reducer functions that handle state updates.

// In Redux, the state of the entire application is stored in a single object called the store. The store is updated using actions, which are plain JavaScript objects that describe what happened in the application. Reducer functions take the current state of the store and an action and return a new state object based on the action.

// React works with Redux by using a special component called a "container" or "smart" component that is connected to the Redux store. The container component maps the state and actions from the store to the props of the component, allowing it to use the data and trigger actions to update the store.

// In React, a controlled component is a component where the value of an input field is controlled by React state. This means that the component's state is the "single source of truth" for the value of the input field. To make a component controlled, you need to bind the value of the input field to a state variable and provide an onChange handler to update the state when the user types in the input field.

// In contrast, an uncontrolled component is a component where the value of an input field is not controlled by React state. Instead, the value is managed by the browser's DOM. To get the value of an uncontrolled input field, you would typically use a ref to access the DOM node.

// Controlled components give you more control over the behavior of your components, but require more code to set up. Uncontrolled components are simpler to set up, but give you less control over the behavior of your components.

// Great job so far! Here's your next question:

// In JavaScript, when an event is triggered on an element, such as a mouse click or a key press, that event can "bubble up" through the DOM tree, triggering the same event on each ancestor element of the original element. This process is called "event bubbling".

// For example, if you have a button inside a div, and you click on the button, the click event will first be triggered on the button itself, and then bubble up to the div, the body, the HTML element, and finally the window object. This can be useful if you want to handle the same event on multiple elements in a hierarchy, but it can also cause unintended side effects if you don't handle the event correctly.

// To prevent event bubbling, you can use the event.stopPropagation() method, which stops the event from propagating up the DOM tree.
