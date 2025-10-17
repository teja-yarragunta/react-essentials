library vs framework

library

1 - collection of reusable code

2 - reduces need to write repetitive/complex things from scratch

3 - can be controlled how/when its used. no/few boundaries.

framework

1 - predefined architecture, you follow a specified pattern of development

2 - we work within the boundaries set by the framework

3 - there are 'right' and 'wrong' ways to use it

React is a library, it calls itself as a library for web and native user interfaces
Now a days react has been built out as a whole ecosystem to the point where one of the most common ways to use react is to do using a framework like NextJS

2006 - JQuery library
2010 - angular(framework), ember, backbone js
2013 - react, vue
2016 - svelte, nextjs
2020 - astro, remix, solid

why React?

1. It's composable!
   can create easily reusable and interchangeable "pieces of web" that can be combined in various ways to create complex systems.
2. It's declarative!
   can lean on the library to handle the manual, tedious tasks that we otherwise would have to worry about ourselves.

Components
reusable building blocks that encapsulate a part of the user interface (UI) and its associated logic. They are the fundamental units for building React applications.
components should follow PascalCasing

if we export a component as default we don't need to put that component in { } while importing and with whatever name we want
./ indicates that's it's our own file and lives in the current directory, and it's not some third party package, and the default is .js extension also works from .jsx, so we don't need to specify the extension

```
<button onClick={handleClick()}>Click me</button>

if we put () after the function, then the function will be called even before clicking

<button onClick={handleClick()}>Click me</button>
```

props:
Props refer to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above." A component receiving props is not allowed to modify the props, they are immutable.

state:
state refers to the values that are managed by the component, similar to variables declared inside a function, anytime we have changing values that should be saved/displayed, we have to use state.

making changes to local variable doesn't let react to re-run the component, instead we have to provide a state variable and function to change that change to let react re-run the component
