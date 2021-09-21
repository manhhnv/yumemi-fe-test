import React from 'react';

interface SpinnerProps {
  style?: React.CSSProperties | undefined;
}

const Spinner = (props: SpinnerProps) => {
  return <div className="spinner" style={props.style}></div>;
};

export default React.memo(Spinner);
