import ReactCodeMirror from '@uiw/react-codemirror'
import React from 'react'
import { javascript } from '@codemirror/lang-javascript';
export const Editor = () => {
  return (
    <div className='h-full w-6/12 relative  bg-black'>
        <ReactCodeMirror height='100vh' extensions={[javascript({ jsx: true })]} value='hello world' onChange={()=>{}} theme="dark"
        style={{
            fontSize: 20
        }}
        />
    </div>
  )
}
