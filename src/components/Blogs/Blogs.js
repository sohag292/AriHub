import React from 'react'
export default function Blogs() {
  return (
    <div>
      <div className='bg-light p-4 '>
        <h1 className='text-center mb-4'>Blogs</h1>
      </div>
      <div className='container my-5'>
        <h3>1. When should you use context API?</h3>
        <p>Ans: The Context API in React is used to share data between components without having to pass props through every level of the component tree. It allows  to create a context object that holds the data you want to share, and any component can access that data by "subscribing" to the context using the useContext hook. This makes your code more efficient and easier to manage.</p>
        <h3>2. What is a custom hook?</h3>
        <p>Ans:A custom hook is a JavaScript function in React that allows you to extract and reuse common logic in your application. By encapsulating the logic in a custom hook, you can avoid code duplication, improve code readability, and make your codebase more maintainable.

          Custom hooks can be used to encapsulate complex stateful logic, such as fetching data from an API or subscribing to a WebSocket. They can also be used to encapsulate more basic functionality, such as managing form input or handling browser events.

          One of the benefits of custom hooks is that they allow you to write reusable and composable code. You can use a custom hook in multiple components throughout your application, and each component can customize the behavior of the hook by passing in different props or configuration options </p>
        <h3>3. What is useRef?</h3>
        <p>Ans: useRef is a React hook that returns a mutable ref object. It can be used to access and modify DOM nodes or to store mutable values that do not trigger a re-render when they change. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</p>
        <h3>4. What is useMemo?</h3>
        <p>Ans: useMemo() is a React hook that allows you to optimize the performance of your application by caching the result of an expensive computation. It takes two arguments: a function that returns a value, and an array of dependencies. The function is only executed when one of the dependencies changes, and the result is cached so that subsequent calls to the function can return the cached value instead of recomputing it.

          This can be very useful in situations where a component needs to perform a heavy computation, such as sorting a large array or rendering a complex visualization. By using useMemo(), you can ensure that the computation only happens when it's necessary, and that the result is reused when the component is re-rendered.</p>

      </div>
    </div>
  )
}
