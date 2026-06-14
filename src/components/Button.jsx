import React from 'react';

export default function Button({ children, onClick }) {
  return React.createElement(
    'button',
    { onClick: onClick, style: { padding: '8px 12px', fontSize: 16 } },
    children
  );
}
