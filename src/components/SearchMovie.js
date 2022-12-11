import { Input, InputGroup } from '@chakra-ui/input'
import { Box, Text } from '@chakra-ui/layout'
import axios from 'axios'
import React from 'react'
// import { FaSearch } from 'react-icons/fa'
import onClickOutside from 'react-onclickoutside'
import { useHistory } from 'react-router-dom'

function SearchMovie() {
  const [value, setValue] = React.useState('')
  const [movies, setMovies] = React.useState([])
  const [showAutoComplete, setShowAutoComplete] = React.useState(true)

  const history = useHistory()

  SearchMovie.handleClickOutside = () => {
    setShowAutoComplete(false)
  }

  React.useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=cadc1a65&s=${value}`)
      .then(res => {
        setMovies(res.data.Search)
      })
  }, [value])

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      history.push(`/search/${value}`)
      window.location.reload()
    }
  }

  return (
    <Box position="relative" maxW="86%" className="search__group__box">
      <InputGroup marginLeft="5.5rem" className="search__group">
        {/* <InputLeftElement children={<FaSearch color="gray" />} /> */}
        <Input
          border="none"
          borderRadius="0px"
          bg="background2"
          placeholder="Search"
          _placeholder={{ color: 'gray' }}
          color="black"
          value={value}
          onChange={e => setValue(e.target.value)}
          onClick={() => setShowAutoComplete(true)}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
      <Box
        display={showAutoComplete ? 'block' : 'none'}
        mt="-5px"
        bg="background2"
        // width="100%"
        position="absolute"
        zIndex={100}
      >
        {movies?.map(({ Title, imdbID }) => (
          <Text
            tabIndex="0"
            p={1}
            color="white"
            cursor="pointer"
            _focus={{ bg: 'primary', color: 'white' }}
            _hover={{ bg: 'primary', color: 'white' }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                history.push(`/detail/${imdbID}`)
                window.location.reload()
              }
            }}
          >
            {Title}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchMovie.handleClickOutside,
}

export default onClickOutside(SearchMovie, clickOutsideConfig)
