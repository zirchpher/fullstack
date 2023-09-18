import { Children, cloneElement } from 'react';

export const TodoHeader = ({ children, isLoading }) => {
  const elements = Children.map(children, (child) => {
    return cloneElement(child, { isLoading });
  });

  return <header>{elements}</header>;
};
