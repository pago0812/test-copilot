import React from 'react';
import './styles/App.css';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Welcome to My React App</h1>
            <ExampleComponent />
        </div>
    );
};

export default App;