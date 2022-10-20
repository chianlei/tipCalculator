import React, {Component} from 'react';

import {Flex, Text, Box, Center} from 'native-base';

export default function Header() {
  return (
    <>
      <Flex w="100%" h="155px" bgColor="#C5E4E7" zIndex={-1}>
        <Center>
          <Box my="40px">
            <Text
              fontSize="30px"
              color="#3D6666"
              style={{fontFamily: 'SpaceMono-Bold'}}>
              S P L I
            </Text>
            <Text
              fontSize="30px"
              color="#3D6666"
              style={{fontFamily: 'SpaceMono-Bold'}}>
              T T E R
            </Text>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
