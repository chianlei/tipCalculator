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
  FlatList,
  View,
  Wrap,
} from 'native-base';
import {Touchable, TouchableOpacity} from 'react-native';

export default function TipSelect({setSelectedTip, selectedTip}) {
  // const [tip, setTip] = useState([
  //   {value: '5'},
  //   {value: '10'},
  //   {value: '15'},
  //   {value: '25'},
  //   {value: '50'},
  // ]);
  // const [tip, setTip] = useState(0)
  const tips = [
    {
      id: '1',
      value: '5',
    },
    {
      id: '2',
      value: '10',
    },
    {
      id: '3',
      value: '15',
    },
    {
      id: '4',
      value: '25',
    },
    {
      id: '5',
      value: '50',
    },
  ];

  const pressHandler = value => {
    setSelectedTip(value);
  };
  const styles = {
    container: {
      flexWrap: 'wrap',
    },
    item: {
      backgroundColor: '#00474B',
      color: 'white',
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 18,
      marginTop: 5,
    },
  };
  // return (
  //   <>
  //     <FlatList
  //       style={styles.container}
  //       numColumns={2}
  //       keyExtractor={item => item.value}
  //       data={tip}
  //       renderItem={({item}) => (
  //         <Pressable onPress={() => pressHandler(item.value)}>
  //           <Text style={styles.item}>{item.value}</Text>
  //         </Pressable>
  //       )}
  //     />
  //   </>
  // );

  return (
    <>
      <Box my="10px" mx="27px">
        <Text color="#5E7A7D" fontSize="16px" bold mb="8px">
          Select Tip %
        </Text>
        <View
          flexDirection="row"
          flexWrap="wrap"
          // style={styles.container}
          key={tips.id}>
          {tips.map(tip => {
            return (
              <Pressable
                w="160px"
                _pressed={{
                  bg: '#26C2AE',
                }}
                bg="#00474B"
                my="1"
                mr="5"
                rounded="sm"
                onPress={() => pressHandler(tip.value)}
                // _pressed={{
                //   backgroundColor: '#26C2AE',
                // }}
              >
                <Text
                  // style={styles.item}
                  py="1.5"
                  bold
                  color="white"
                  textAlign="center"
                  fontSize="18px">
                  {tip.value} %
                </Text>
              </Pressable>
            );
          })}
          <Box>
            <Input
              value={selectedTip}
              mt="5px"
              borderRadius="5"
              w="160px"
              h="40px"
              onChangeText={pressHandler}
              maxLength={2}
              minLength={1}
              placeholder="Custom"
              placeholderTextColor="#00474B"
              fontSize="18px"
              textAlign="center"
              keyboardType="numeric"></Input>
          </Box>
        </View>
      </Box>
    </>
  );
}
