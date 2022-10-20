import React, {Component, useState, useEffect} from 'react';
import BillInput from './BillInput';
import SelectTip from './SelectTip';
import PeopleInput from './PeopleInput';
import TotalTip from './TotalTip';
import TipSelect from './TipSelect';
// import {Keyboard} from 'react-native';

export default function TipCalculator() {
  const [inputBill, setInputBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [inputPeople, setInputPeople] = useState();

  return (
    <>
      <BillInput setBill={setInputBill} inputBill={inputBill} />
      {/* <SelectTip setSelectedTip={setSelectedTip} selectedTip={selectedTip} /> */}
      <TipSelect setTip={setSelectedTip} selectedTip={selectedTip} />
      <PeopleInput setPeople={setInputPeople} inputPeople={inputPeople} />
      <TotalTip
        inputBill={inputBill}
        selectedTip={selectedTip}
        inputPeople={inputPeople}
        setInputBill={setInputBill}
        setSelectedTip={setSelectedTip}
        setInputPeople={setInputPeople}
      />
      {/* {Keyboard.dismiss()} */}
    </>
  );
}
