import React from 'react'
import "./style/UpparArea.css"
// #b3dde0
export const Discussion = () => {
    const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  return (
    <div className='DicsussDIV'>
      <h2>Discussion</h2>
      <div>
      <div>
      <h1>Welcome, {username && username.split('@')[0]}!</h1>
      <p>Role: {role}</p>

    </div>
    </div>
    </div>
  )
}
