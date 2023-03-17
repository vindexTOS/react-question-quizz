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
      `make htttps requests on all devices`,
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
    correct: `reduce https requests, compress img size make it webpg instad of jpg`,
    answers: [
      `reduce https requests, compress img size make it webpg instad of jpg`,
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
]

export default questions

// {
//     question:` `,
//     correct:` `,
//     answers:[],
//     lvl:` `
// }
