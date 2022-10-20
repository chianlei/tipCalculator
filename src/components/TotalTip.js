import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  Box,
  HStack,
  Pressable,
} from 'native-base';

export default function TotalTip({
  inputBill,
  selectedTip,
  inputPeople,
  setInputBill,
  setSelectedTip,
  setInputPeople,
}) {
  useEffect(() => {
    console.log('bill: ' + inputBill);
    console.log('tip%: ' + selectedTip);
    console.log('pp: ' + inputPeople);
    console.log('td: ' + tipTD);
    console.log('total: ' + total);
  });

  const tipAmount = (inputBill * selectedTip) / 100 / inputPeople;

  const tipTD = tipAmount.toFixed(2);

  const total = (tipAmount + inputBill / inputPeople).toFixed(2);

  return (
    <>
      <Box
        w="373px"
        h="233px"
        borderRadius={12}
        bgColor="#00474B"
        mx="20px"
        my="10px">
        <HStack justifyContent="space-between" mb="10px" mx="30" mt="30px">
          <Box>
            <Text color="white" bold>
              Tip Amount
            </Text>
            <Text color="#7F9E9F"> / person</Text>
          </Box>
          <Box>
            {tipTD == 'NaN' ? (
              <Text color="#26C2AE" bold fontSize="28px">
                $ 0
              </Text>
            ) : (
              <Text color="#26C2AE" bold fontSize="28px">
                $ {tipTD}
              </Text>
            )}
          </Box>
        </HStack>
        <HStack justifyContent="space-between" mx="30" my="10px">
          <Box>
            <Text color="white" bold>
              Total
            </Text>
            <Text color="#7F9E9F"> / person</Text>
          </Box>
          <Box>
            {total == 'NaN' ? (
              <Text color="#26C2AE" bold fontSize="28px">
                $ 0
              </Text>
            ) : (
              <Text color="#26C2AE" bold fontSize="28px">
                $ {total}
              </Text>
            )}
          </Box>
        </HStack>
        <Pressable
          onPress={() => {
            setInputBill(0), setSelectedTip(0), setInputPeople(0);
          }}
          mx="5"
          mt="15px"
          w="90%"
          _pressed={{
            bg: '#9FE8DF',
          }}
          bg="#26C2AE"
          py="2"
          rounded="sm">
          <Text bold color="#00474B" textAlign="center" fontSize="17px">
            RESET
          </Text>
        </Pressable>
      </Box>
    </>
  );
}
