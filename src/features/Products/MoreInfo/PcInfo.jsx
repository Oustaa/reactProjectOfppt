import React from "react";

import { FormControll, RadioBtn } from "../../../StyledComponnents";

const PcInfo = ({
  handleChange,
  inputsValue,
  handelBlur,
  handelFocus,
  valueValidation,
}) => {
  return (
    <>
      <FormControll
        className={
          valueValidation?.cpu?.gotFocus && !valueValidation?.cpu?.validation
            ? "invalid"
            : ""
        }
      >
        <label htmlFor='cpu'>Cpu:</label>
        <input
          onChange={handleChange}
          onFocus={handelFocus}
          onBlur={handelBlur}
          value={inputsValue.cpu ? inputsValue.cpu : ""}
          type='text'
          name='cpu'
        />
      </FormControll>
      <FormControll
        className={
          valueValidation?.gpu?.gotFocus && !valueValidation?.gpu?.validation
            ? "invalid"
            : ""
        }
      >
        <label htmlFor='gpu'>Gpu:</label>
        <input
          onChange={handleChange}
          onFocus={handelFocus}
          onBlur={handelBlur}
          type='text'
          value={inputsValue.gpu ? inputsValue.gpu : ""}
          name='gpu'
        />
      </FormControll>
      <FormControll
        className={
          valueValidation?.ram?.gotFocus && !valueValidation?.ram?.validation
            ? "invalid"
            : ""
        }
      >
        <label htmlFor='ram'>Ram:</label>
        <input
          onChange={handleChange}
          onFocus={handelFocus}
          onBlur={handelBlur}
          type='number'
          value={inputsValue.ram}
          name='ram'
        />
      </FormControll>
      <FormControll
        className={
          valueValidation?.["keyboard&mouse"]?.gotFocus &&
          !valueValidation?.["keyboard&mouse"]?.validation
            ? "invalid"
            : ""
        }
      >
        <label htmlFor='keyboard&mouse'>keyboard & mouse:</label>
        <RadioBtn>
          <input
            onChange={handleChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            checked={+inputsValue["keyboard&mouse"] === 1}
            type='radio'
            value={1}
            name='keyboard&mouse'
            id='yes'
          />
          <label htmlFor='yes'>inclodede</label>
        </RadioBtn>
        <RadioBtn>
          <input
            onChange={handleChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            type='radio'
            checked={+inputsValue["keyboard&mouse"] === 0}
            value={0}
            name='keyboard&mouse'
            id='not'
          />
          <label htmlFor='not'>not inclodede</label>
        </RadioBtn>
      </FormControll>
    </>
  );
};

export default PcInfo;
