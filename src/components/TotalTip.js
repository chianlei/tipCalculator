import React, {Component, useEffect, useState} from 'react';
import {
  Flex,
  Text,
  Box,
  FormControl,
  Center,
  Spacer,
  Button,
  HStack,
  Pressable,
} from 'native-base';

export default function TotalTip({inputBill, selectedTip, inputPeople}) {
  useEffect(() => {
    console.log('bill: ' + inputBill);
    console.log('tip: ' + selectedTip);
    console.log('pp: ' + inputPeople);
  });

  const tipAmount = (inputBill * selectedTip) / 100 / inputPeople;

  const tipTD = tipAmount.toFixed(2);

  const total = (tipAmount + inputBill / inputPeople).toFixed(2);

  return (
    <>
      {console.log('bill: ' + inputBill)}
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
            <Text color="#26C2AE" bold fontSize="28px">
              $ {tipTD}$ 0
            </Text>
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
            <Text color="#26C2AE" bold fontSize="28px">
              $ {total}$ 0
            </Text>
          </Box>
        </HStack>
        <Pressable
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
