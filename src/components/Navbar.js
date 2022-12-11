import { HStack, Text } from '@chakra-ui/layout'
import React from 'react'
// import SearchMovie from './SearchMovie'

export default function Navbar() {
  return (
    <HStack
      px={10}
      py={6}
      // mb={4}
      justifyContent="space-between"
      borderBottom="1px solid #000"
      backgroundColor="#292929"
    >
      <a href="/">
        <Text
          fontSize="2xl"
          fontWeight="medium"
          letterSpacing="1px"
          color="#fff"
          ml="3.2rem"
        >
          MyTestApp
        </Text>
      </a>
    </HStack>
  )
}
