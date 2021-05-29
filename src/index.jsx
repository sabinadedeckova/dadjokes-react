import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke/index';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      {jokes.map((props) => (
        <Joke
          key={props.id}
          userAvatar={props.avatar}
          userName={props.name}
          text={props.text}
          likes={props.likes}
          dislikes={props.dislikes}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
