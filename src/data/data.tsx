interface Questions {
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
      `React is an open-source front-end JavaScript library that is used for building composable user interfaces React was
    created by Jordan Walke, a software engineer working for Facebook. 
   React was first deployed on Facebook s News Feed in 2011 and on Instagram in 2012.
   `,
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
]

export default questions

// {
//     question:` `,
//     correct:` `,
//     answers:[],
//     lvl:` `
// }
