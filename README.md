### 项目规范

> 项目规范：项目中有一些开发规范和代码风格
>

- 文件夹、文件名称统一小写、多个单词以连接符（-）连接；
- .JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
- CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;
- 整个项目不再使用class组件，统一使用函数式组件，并且全面拥抱Hooks
- 所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹
- 组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理
- 函数组件内部基本按照如下顺序编写代码
  - 组件内部state管理
  - redux的hooks代码
  - 其他组件hooks代码
  - 其他逻辑代码
  - 返回JSX代码
- redux代码规范如下：
  - 每个模块有自己独立的reducer，通过combineReducer进行合并；
  - 异步请求代码使用redux-thunk，并且写在actionCreators中；
  -  redux直接采用redux hooks方式编写，不再使用connect；

- 网络请求采用axios
  - 对axios进行二次封装；
  - 所有的模块请求会放到一个请求文件中单独管理；

- 项目使用AntDesign
  - 项目中某些AntDesign中的组件会被拿过来使用；
  - 但是多部分组件还是自己进行编写；


### 插件
- 样式重置:normalize.css
- 别名:@craco/craco
- 生成文件夹目录结构:tree-node-cli
- 样式编写:styled-components
- ui库:antd
- 图标库:@antdesign/icons
- 网络请求：axios
- 状态管理:redux react-redux
- 状态管理异步请求:Redux-thunk
- 解决数据可变性引起的性能问题:ImmutableJS
