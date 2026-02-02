import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'

function App() {
  return (
    <>
    <div style={{padding: "20px"}}>
      <h1>Danh Sách Sinh Viên</h1>
      <Student name="Nguyễn Ngọc Quỳnh Nhi" age={17} className ="26SPIT3"/>
      <Student name="Nguyễn Ngọc Quỳnh Như" age={17} className ="26SPIT3"/>
      <Student name="Võ Nguyễn Phương Uyên" age={17} className ="26SPIT3"/>
    </div>
    </>

  )
}
export default App;
