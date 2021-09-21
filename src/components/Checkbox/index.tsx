// import React, { useState } from 'react';

import { ReactEventHandler } from 'react';

type CheckboxProps = {
  label?: string;
  value?: string | number;
  checked?: boolean;
  name?: string;
  evenHandler?:
    | ReactEventHandler<HTMLInputElement | HTMLDivElement>
    | undefined;
};

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className="checkbox-item" onClick={props.evenHandler}>
      <input
        type="radio"
        value={props?.value}
        checked={props?.checked ? true : false}
        onChange={props.evenHandler}
        name={props.name}
      />
      {props?.label?.trim() && (
        <label
          className={props?.checked ? 'checkbox-label-bold ' : 'checkbox-label'}
        >
          {props.label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
