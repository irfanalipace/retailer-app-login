import React, { useState } from 'react'
import './task.css'
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];
const Task1 = () => {
  const [visibleContent, setVisibleContent]=useState(0);

  return (
    <div className='container'>
      <div className='tabs'>
        <div>
        <button onClick={()=>setVisibleContent(0)}>State</button>
        </div>
        <div>
        <button onClick={()=>setVisibleContent(1)}>Props</button>
        </div>
        <div>
          <button onClick={()=>setVisibleContent(2)}>Components</button>
        </div>
      </div>
    
      <div style={{display:'flex', justifyContent:'center'}}>
      <ul >
          {
            content[visibleContent].map(item=>
              <li>
                {item}
              </li>
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default Task1
