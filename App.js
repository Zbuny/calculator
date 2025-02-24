
import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  
  const handleClick = (val) => {
    if (['+', '-', '*', '/'].includes(val) && ['+', '-', '*', '/'].includes(value.slice(-1))) {
      return;
    }
    setValue(value + val);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue('Ошибка');
      setTimeout(() => setValue(''), 1500);
    }
  };

  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'calculator' },
      React.createElement(
        'form',
        {},
        React.createElement(
          'div',
          { className: 'display' },
          React.createElement('input', { type: 'text', value, readOnly: true })
        ),
        React.createElement('div', {},
          ['AC', 'DE', '.', '/'].map(val =>
            React.createElement('input', {
              key: val,
              type: 'button',
              value: val,
              className: val === '=' ? 'equal' : '',
              onClick: val === 'AC' ? () => setValue('') :
                val === 'DE' ? () => setValue(value.slice(0, -1)) :
                val === '=' ? calculate : () => handleClick(val)
            })
          )
        ),
        React.createElement('div', {},
          ['7', '8', '9', '*'].map(val =>
            React.createElement('input', {
              key: val,
              type: 'button',
              value: val,
              onClick: () => handleClick(val)
            })
          )
        ),
        React.createElement('div', {},
          ['4', '5', '6', '+'].map(val =>
            React.createElement('input', {
              key: val,
              type: 'button',
              value: val,
              onClick: () => handleClick(val)
            })
          )
        ),
        React.createElement('div', {},
          ['1', '2', '3', '-'].map(val =>
            React.createElement('input', {
              key: val,
              type: 'button',
              value: val,
              onClick: () => handleClick(val)
            })
          )
        ),
        React.createElement('div', {},
          ['00', '0', '='].map(val =>
            React.createElement('input', {
              key: val,
              type: 'button',
              value: val,
              className: val === '=' ? 'equal' : '',
              onClick: val === '=' ? calculate : () => handleClick(val)
            })
          )
        )
      )
    )
  );
}

export default App;