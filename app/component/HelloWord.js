'use strict';
import React from 'react'
import maincss from '../assets/css/main.scss'
export default class extends React.Component {
  render(){
    return(
      <div>
        {this.props.val}
        <div className={maincss.blue}>
          <span>app组件</span>
          <div className="a666">这里是红色1
            <div className="child">这里是child</div>
          </div>
          <div className={maincss.blue1}>blue1呢</div>
          <input type="text"/>
        </div>
      </div>
    )
  }
}