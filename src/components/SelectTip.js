import React, {Component, useState, useEffect, useRef} from 'react';
import {Text, Button, HStack, Box, Input, Pressable} from 'native-base';

// unused component
export default function SelectTip({setSelectedTip, selectedTip}) {
  function tipSelected(value) {
    setSelectedTip(value);
  }
  const btnRef = useRef();

  useEffect(() => {
    console.log('tip: ' + tip);
  }, []);

  return (
    <>
      <Box my="10px" mx="14px" px="10px">
        <Text color="#5E7A7D" fontSize="16px" bold mb="8px">
          Select Tip %
        </Text>
        <HStack justifyContent="space-between">
          <Button
            ref={btnRef}
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
            <Text bold color="white" textAlign="center" fontSize="18px">
              5 %
            </Text>
          </Button>
          <Pressable
            value="10"
            // onPress={tipSelected}
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
