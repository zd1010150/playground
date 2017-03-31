import React, { PureComponent } from 'react';
import Canvas from './MobXCanvas';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pixel Paint</h2>
        </div>
        <div>
          <div className="App-canvasContainer">
            <div className="App-canvas">
              <Canvas />
            </div>
          </div>
          <div className="App-canvasContainer">
            <div className="App-canvas">
              <Canvas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
