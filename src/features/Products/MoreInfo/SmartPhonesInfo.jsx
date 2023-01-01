import React from "react";

import { FormControll, RadioBtn } from "../../../StyledComponnents";

const SmartPhonesInfo = ({
  handleChange,
  inputsValue,
  handelBlur,
  handelFocus,
}) => {
  return (
    <>
      <FormControll>
        <label htmlFor='memory'>memory:</label>
        <input
          onChange={handleChange}
          value={inputsValue.memory ? inputsValue.memory : ""}
          type='number'
          name='memory'
        />
      </FormControll>
      <FormControll>
        <label htmlFor='ram'>Ram:</label>
        <input
          onChange={handleChange}
          type='number'
          value={inputsValue.ram ? inputsValue.ram : ""}
          name='ram'
        />
      </FormControll>
      <FormControll>
        <label htmlFor='screensize'>Screen Size:</label>
        <input
          onChange={handleChange}
          type='number'
          value={inputsValue.screensize ? inputsValue.screensize : ""}
          name='screensize'
        />
      </FormControll>
      <FormControll>
        <label htmlFor='voiceAssistant'>Voice Assistant:</label>
        <RadioBtn>
          <input
            onChange={handleChange}
            type='radio'
            value={1}
            checked={+inputsValue.voiceAssistant === 1}
            name='voiceAssistant'
            id='yes'
          />
          <label htmlFor='yes'>inclodede</label>
        </RadioBtn>
        <RadioBtn>
          <input
            onChange={handleChange}
            type='radio'
            value={0}
            checked={+inputsValue.voiceAssistant === 0}
            name='voiceAssistant'
            id='not'
          />
          <label htmlFor='not'>not inclodede</label>
        </RadioBtn>
      </FormControll>
      {inputsValue?.voiceAssistant &&
      Boolean(+inputsValue.voiceAssistant) === true ? (
        <FormControll>
          <label htmlFor='builtInvoiceAssistant'>
            Built in voice Assistant:
          </label>
          <select
            type='text'
            id='builtInvoiceAssistant'
            name='builtInvoiceAssistant'
            value={inputsValue?.builtInvoiceAssistant}
            onChange={handleChange}
          >
            <option value=''>--Select A Catigorie--</option>
            <option value='Google Assistant'>Google Assistant</option>
            <option value='Alexa'>Alexa</option>
          </select>
        </FormControll>
      ) : null}
    </>
  );
};

export default SmartPhonesInfo;
