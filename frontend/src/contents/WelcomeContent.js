import * as React from 'react';

export default class WelcomeContent extends React.Component {

  render() {
    return (
      <div className="container">
            <div className="text-center">
              <h1 className="display-4">Welcome</h1>
              <p>Login to see protected content.</p>
            </div>
      </div>
    );
  };
}