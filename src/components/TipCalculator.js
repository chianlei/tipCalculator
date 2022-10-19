import React, {Component, useState, useEffect} from 'react';
import {Flex, Text, Input, Center, Box} from 'native-base';
import Foundation from 'react-native-vector-icons/Foundation';
import BillInput from './BillInput';
import SelectTip from './SelectTip';
import PeopleInput from './PeopleInput';
import TotalTip from './TotalTip';
import TipSelect from './TipSelect';
// import {Keyboard} from 'react-native';44

export default function TipCalculator() {
  const [inputBill, setInputBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [inputPeople, setInputPeople] = useState(0);

  const handleBill = bill => {
    setInputBill(bill);
  };

  //   const handleTip = tip => {
  //     setSelectedTip(tip);
  //   };

  const handlePeople = people => {
    setInputPeople(people);
  };

  //   useEffect(() => {
  //     console.log('tip: ' + selectedTip);
  //   }, [selectedTip]);

  return (
    <>
      {/* {console.log('bill: ' + inputBill)} */}
      {/* <form id='tip-form'>
        <FormControl> */}

      <BillInput setBill={handleBill} inputBill={inputBill} />
      {/* <SelectTip setSelectedTip={setSelectedTip} selectedTip={selectedTip} /> */}
      <TipSelect setSelectedTip={setSelectedTip} selectedTip={selectedTip} />
      <PeopleInput setPeople={handlePeople} inputPeople={inputPeople} />
      <TotalTip
        inputBill={inputBill}
        selectedTip={selectedTip}
        inputPeople={inputPeople}
        setInputBill={setInputBill}
        setSelectedTip={setSelectedTip}
        setInputPeople={setInputPeople}
      />

      {/* {Keyboard.dismiss()} */}
      {/* </FormControl>
      </form> */}
    </>
  );
}
