import React from 'react';
import { UserNameInputs } from '@/components';
import { RecoilRoot } from 'recoil';
import tw from "tailwind-styled-components"



const AppWrap = tw.div`
  bg-gradient-to-r
  from-cyan-500
  to-blue-500
  h-screen
  p-5
  md:p-10
  py-20
`
function App() {
  return (
    <RecoilRoot>
      <AppWrap className="App">
        <UserNameInputs />
      </AppWrap>
    </RecoilRoot>
  )
}

export default App
