import React from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import './App.css'
import { ToastProvider} from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
    <div className="parent-container">
       <Header title="CGPA Calculator" />
       <Form />
       <Header title="created by gautam #letzzBuild"/>
    </div>
    </ToastProvider>
  )
}

export default App
