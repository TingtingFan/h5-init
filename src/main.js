import Vue from 'vue'
import App from './App.vue'

import { router } from './router/index' // 引入路由

import 'amfe-flexible' //px单位转rem
import {
  Row,
  Col,
  Toast,
  Dialog,
  Cell,
  Tab,
  Tabs,
  Image,
  Icon,
  Field,
  Form,
  Uploader,
  Circle,
  CellGroup,
  DropdownMenu,
  DropdownItem,
  Picker,
  Popup,
  PullRefresh,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Empty,
  List,
  Loading
} from 'vant' //全局引入常用组件
import 'vant/lib/index.css';
Vue.use(Row)
  .use(Col)
  .use(Toast)
  .use(Dialog)
  .use(Cell)
  .use(Tab)
  .use(Tabs)
  .use(Image)
  .use(Icon)
  .use(Field)
  .use(Form)
  .use(Uploader)
  .use(Circle)
  .use(CellGroup)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Picker)
  .use(Popup)
  .use(PullRefresh)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(RadioGroup)
  .use(Radio)
  .use(Empty)
  .use(List)
  .use(Loading)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
