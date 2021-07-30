import React from 'react';

const isServerSideRendered = () => {
  return typeof window === 'undefined'
}

if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
    import('react-dom').then((ReactDOM) => {
        import('@axe-core/react').then((axe) => {
            axe.default(React, ReactDOM, 1000, {})
        })
    })
}

const App = (): React.ReactElement => (
  <div>
    <h1>TNY Tech Test Boilerplate App</h1>
    <p>Happy coding!</p>
  </div>
);

export default App;
