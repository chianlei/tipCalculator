import React, {Component, useState, useEffect} from 'react';
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
  function onChangeTip(e) {
    setSelectedTip(e);
  }

    useEffect(() => {
      console.log('tip: ' + selectedTip);
    }, [selectedTip]);
  
  return (
    <>
      <Box my="10px" mx="14px" px="10px">
        <Text color="#5E7A7D" fontSize="16px" bold mb="8px">
          Select Tip %
        </Text>
        <HStack justifyContent="space-between">
          <Button
            onPress={setSelectedTip(5)}
            w="160px"
            _pressed={{
              bg: '#26C2AE',
            }}
            bg="#00474B"
            py="2"
            rounded="sm">
            <Text bold color="white" textAlign="center" fontSize="18px">
              5
            </Text>
          </Button>
          <Pressable
            value="10"
            onPress={setSelectedTip(10)}
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
            onPress={setSelectedTip(15)}
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
            onPress={setSelectedTip(25)}
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
              onPress={setSelectedTip(50)}
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
              mt="12px"
              borderRadius="5"
              w="160px"
              h="40px"
              onChangeText={onChangeTip}
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
