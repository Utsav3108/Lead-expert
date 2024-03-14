import React from 'react'

const Title = (prop) => {
  return (
    <div className='List-container'>
        <span id='list-label'>{prop.main_name} <span id="widget">{prop.sub_name_1} | </span><span id='widget_2'>{prop.subname_2}</span></span>
        <button id='bt-addwidget'>{prop.button_name}</button>
    </div>
  )
}

export default Title