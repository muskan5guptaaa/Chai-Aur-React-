import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
<div>        <hi>Hello</hi>
</div>
    )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank",
//     },
//     children:"Click me to visit google"
// }
const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to visit google</a>
);

const anotherUser="Chai"

const ReactElement=React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit ',
    anotherUser
    );
createRoot(document.getElementById('root')).
render(

ReactElement
  )
