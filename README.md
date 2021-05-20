# 🔥🔥🔥 STATE MANAGMENT IN REACT 🔥🔥🔥

- What is state?
- Why state management matters?
- Recommended practices
- Recoil demo
- Redux toolkit demo

## What is state?

Way to create communication and sharing of data accross components. Creates a certain data structure to represent the apps state that you can read and write.

    { ...currentState } -> action -> { ...newState }

## Why state management matters?

User's action causes changes in components state. The more complex and bigger application - more state changes we need to track.

## Recommended practices

1. Start with react built in state management (local state)
2. Co-locate state - lift up / move down
3. Is prop drilling a problem?
4. Composition
5. Context
6. Look for an external tool

## Recoil demo

    npm i recoil

## Redux toolkit demo

    npm i @reduxjs/toolkit react-redux

## Resources

- state management
  [https://dev.to/workshub/state-management-battle-in-react-2021-hooks-redux-and-recoil-2am0]
  [https://leerob.io/blog/react-state-management]
  [https://www.youtube.com/watch?v=ZguCD2Flx14&ab_channel=ReactRally]

- composition
  [https://www.youtube.com/watch?v=3XaXKiXtNjw&ab_channel=ReactTraining]

- Redux toolkit
  [https://redux-toolkit.js.org/tutorials/quick-start]
  [https://www.youtube.com/watch?v=iBUJVy8phqw&ab_channel=TheNetNinja]

- recoil
  [https://recoiljs.org/docs/introduction/getting-started]
  [https://www.youtube.com/watch?v=_ISAA_Jt9kI]
