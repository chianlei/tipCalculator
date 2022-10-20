import React, {Component, useEffect} from 'react';
import {Text, Input, Center, Box, Icon} from 'native-base';
import Foundation from 'react-native-vector-icons/Foundation';

export default function BillInput({setBill, inputBill}) {
  function onChangeBill(e) {
    setBill(e);
  }

  return (
    <>
      <Box bgColor="#C5E4E7">
        <Box borderTopRadius={30} bg="white">
          <Box mx="28px" mt="20px" mb="10px">
            <Text
              color="#5E7A7D"
              fontSize="16px"
              mb="8px"
              style={{fontFamily: 'SpaceMono-Bold'}}>
              Bill
            </Text>
            <Center>
              <Input
                style={{fontFamily: 'SpaceMono-Bold'}}
                maxLength={10}
                textAlign="right"
                fontSize="18px"
                p="10px"
                placeholder="0"
                placeholderTextColor="#00474A"
                w="100%"
                value={inputBill}
                onChangeText={onChangeBill}
                InputLeftElement={
                  <Icon
                    as={<Foundation name="dollar" />}
                    size={7}
                    ml="4"
                    color="#9EBBBD"
                  />
                }
                keyboardType="numeric"
              />
            </Center>
          </Box>
        </Box>
      </Box>
    </>
  );
}
