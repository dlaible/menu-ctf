import { Button, ChakraProvider, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Stack } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

const Menu = () => (
  <Stack spacing={2} py={6} px={8}>
    <Heading as='h1' size='lg'>
      menu
    </Heading>
    <hr />
    <Text mt={2} textAlign='center' fontSize='xl'>
      salmon fettuccine alfredo
    </Text>
    <Text textAlign='center' fontSize='xl'>
      choco chip cookies
    </Text>
  </Stack>
)

const App = () => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState(undefined)
  const [valid, setValid] = useState(false)

  const handleClick = () => {
    if (text === 'ctf') {
      setStatus('right!')
      setValid(true)
    } else {
      setStatus('wrong :(')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
    setStatus(undefined)
  }

  return (
    <ChakraProvider theme={theme}>
      <Stack spacing={2} px={8} py={4}>
        <Heading as='h1' size='lg'>
          welcome shailynn :)
        </Heading>
        <Text>hint: who needs vowels</Text>
        <InputGroup mt={2} size='lg'>
          <Input
            pr='4.5rem'
            placeholder='Enter password'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <InputRightElement width='4.5rem'>
            <Button size='sm' onClick={handleClick}>
              enter
            </Button>
          </InputRightElement>
        </InputGroup>
        {status && <Text>{status}</Text>}
      </Stack>
      {valid && <Menu />}
    </ChakraProvider>
  )
}

export default App
