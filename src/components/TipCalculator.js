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

  const handleBill = bill => {
    setInputBill(bill);
  };

  const handleTip = tip => {
    setSelectedTip(tip);
  };

  const handlePeople = people => {
    setInputPeople(people);
  };

  return (
    <>
      <BillInput setBill={handleBill} inputBill={inputBill} />
      {/* <SelectTip setSelectedTip={setSelectedTip} selectedTip={selectedTip} /> */}
      <TipSelect setSelectedTip={handleTip} selectedTip={selectedTip} />
      <PeopleInput setPeople={handlePeople} inputPeople={inputPeople} />
      <TotalTip
        inputBill={inputBill}
        selectedTip={selectedTip}
        inputPeople={inputPeople}
        setInputBill={setInputBill}
        setSelectedTip={handleTip}
        setInputPeople={setInputPeople}
      />
      {/* {Keyboard.dismiss()} */}
    </>
  );
}
