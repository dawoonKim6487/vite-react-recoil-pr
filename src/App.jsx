import React from 'react';
import Users from './pages/UserList'
import tw from "tailwind-styled-components"

const AppWrap = tw.div`
  flex
  flex-col
  gap-10
  bg-gradient-to-r
  from-cyan-500
  to-blue-500
  min-h-screen
  h-[100%]
  p-5
  md:p-10
  py-20
`
function App() {

  return (
    <AppWrap className="App">
      <Users />
    </AppWrap>
  )
}

export default App
