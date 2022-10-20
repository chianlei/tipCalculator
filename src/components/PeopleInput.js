import React, {Component} from 'react';
import {Text, Input, Center, Box, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PeopleInput({setPeople, inputPeople}) {
  const onChangePeople = e => {
    setPeople(e);
  };

  return (
    <>
      <Box mx="28px" my="10px">
        <Text color="#5E7A7D" fontSize="16px" bold mb="8px">
          Number of People
        </Text>
        <Center>
          <Input
            textAlign="right"
            fontSize="18px"
            p="10px"
            placeholder="0"
            placeholderTextColor="#00474A"
            w="100%"
            value={inputPeople}
            onChangeText={onChangePeople}
            InputLeftElement={
              <Icon
                as={<Ionicons name="person" />}
                size={5}
                ml="2.5"
                color="#9EBBBD"
              />
            }
            keyboardType="numeric"
          />
        </Center>
        {inputPeople == 0 ? <Text color="red.500">Can't be zero</Text> : ''}
      </Box>
    </>
  );
}
