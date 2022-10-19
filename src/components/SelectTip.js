import React, {Component, useState, useEffect, useRef} from 'react';
import {
  Flex,
  Text,
  Button,
  Center,
  HStack,
  Box,
  Input,
  Pressable,
  PresenceTransition,
} from 'native-base';

export default function SelectTip({setSelectedTip, selectedTip}) {
  function tipSelected(value) {
    // const { value } = e.target;
    // console.log(value);
    setSelectedTip(value);
  }
  const btnRef = useRef();
  // const tipSelected = (e, value) => {
  //   setSelectedTip(e, value);
  // };
  //  const [tip, setTip] = useState([
  //    {value: '5'},
  //    {value: '10'},
  //    {value: '15'},
  //    {value: '25'},
  //    {value: '50'},
  //  ]);
  const [tip, setTip] = useState(0);
  //  const pressHandler = value => {
  //    setTip(value);
  //    console.log(value);
  //  };

  useEffect(() => {
    console.log('tip: ' + tip);
  }, []);

  // const value1 = 5;
  //  const value2 = 10;
  // const value = 0;

  //  const tipSelected = () => {
  //    setSelectedTip(5);
  //       // setSelectedTip(10);
  //  };

  return (
    <>
      <Box my="10px" mx="14px" px="10px">
        <Text color="#5E7A7D" fontSize="16px" bold mb="8px">
          Select Tip %
        </Text>
        <HStack justifyContent="space-between">
          <Button
            ref={btnRef}
            // onPress={setTip(5)}
            // onPress={tipSelected(5)}
            // onPress={e => tipSelected(e)}
            title="5"
            onPress={tipSelected}
   
            // onPress={() => console.log('title:' +btnRef.current.props.title)}
            w="160px"
            _pressed={{
              bg: '#26C2AE',
            }}
            bg="#00474B"
            py="2"
            rounded="sm">
            <Text
              bold
              color="white"
              textAlign="center"
              fontSize="18px"
              // onPress={() => tipSelected()}
              // onPress={e => tipSelected(e, value)}
              // onPress={setSelectedTip(5)}
            >
              5 %
            </Text>
          </Button>
          <Pressable
            value="10"
            // onPress={tipSelected}
            // onPress={setTip(10)}
            // onPress={setSelectedTip(10)}
            w="160px"
            _pressed={{
              bg: '#26C2AE',
            }}
            bg="#00474B"
            py="2"
            rounded="sm">
            <Text bold color="white" textAlign="center" fontSize="18px">
              10 %
            </Text>
          </Pressable>
        </HStack>
        <HStack justifyContent="space-between">
          <Pressable
            value="15"
            // onPress={tipSelected}
            // onPress={setSelectedTip(15)}
            mt="10px"
            w="160px"
            _pressed={{
              bg: '#26C2AE',
            }}
            bg="#00474B"
            py="2"
            rounded="sm">
            <Text bold color="white" textAlign="center" fontSize="18px">
              15 %
            </Text>
          </Pressable>
          <Pressable
            value="25"
            // onPress={tipSelected}
            // onPress={setSelectedTip(25)}
            mt="10px"
            w="160px"
            _pressed={{
              bg: '#26C2AE',
            }}
            bg="#00474B"
            py="2"
            rounded="sm">
            <Text bold color="white" textAlign="center" fontSize="18px">
              25 %
            </Text>
          </Pressable>
        </HStack>
        <HStack justifyContent="space-between">
          <Box>
            <Pressable
              value="50"
              // onPress={tipSelected}
              // onPress={setSelectedTip(50)}
              mt="10px"
              w="160px"
              _pressed={{
                bg: '#26C2AE',
              }}
              bg="#00474B"
              py="2"
              rounded="sm">
              <Text bold color="white" textAlign="center" fontSize="18px">
                50 %
              </Text>
            </Pressable>
          </Box>
          <Box>
            <Input
              value={selectedTip}
              mt="12px"
              borderRadius="5"
              w="160px"
              h="40px"
              // onChangeText={tipSelected}
              maxLength={2}
              minLength={1}
              placeholder="Custom"
              placeholderTextColor="#00474B"
              fontSize="18px"
              textAlign="center"
              keyboardType="numeric"></Input>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
