import React from 'react';
import HelloWord from '../component/HelloWord'
import {hot} from 'react-hot-loader'//react保存状态的热重载插件

const App = () => <div><HelloWord val='你好世界'/></div>
export default hot(module)(App)//热重载必须
