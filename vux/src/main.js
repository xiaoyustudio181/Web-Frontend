// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import HelloWorld from './components/HelloWorld'
import HelloFromVux from './components/HelloFromVux'

import Icons from './components/Icons'
import XIcons from './components/XIcons'
import XButtons from './components/XButtons'
import FlexBoxes from './components/FlexBoxes'
import Grids from './components/Grids'
import Stickies from './components/Stickies'
import Calendars from './components/Calendars'
import CellBoxes from './components/CellBoxes'
import CellFormPreviews from './components/CellFormPreviews'
import Cells from './components/Cells'
import CheckIcons from './components/CheckIcons'
import Checkers from './components/Checkers'
import CheckLists from './components/CheckLists'
import DatetimeViews from './components/DatetimeViews'
import DatetimeRanges from './components/DatetimeRanges'
import Datetimes from './components/Datetimes'
import FormPreviews from './components/FormPreviews'
import Groups from './components/Groups'
import Switches from './components/Switches'
import Numbers from './components/Numbers'
import InlineCalendars from './components/InlineCalendars'
import PopupPickers from './components/PopupPickers'
import PopupRadios from './components/PopupRadios'
import Pickers from './components/Pickers'
import Raters from './components/Raters'
import Ranges from './components/Ranges'
import Selectors from './components/Selectors'
import Swipeouts from './components/Swipeouts'
import Searches from './components/Searches'
import XSwitches from './components/XSwitches'
import XInputs from './components/XInputs'
import XNumbers from './components/XNumbers'
import XTextAreas from './components/XTextAreas'
import XAddresses from './components/XAddresses'
import Badges from './components/Badges'
import Cards from './components/Cards'
import Clockers from './components/Clockers'
import Countups from './components/Countups'
import Flows from './components/Flows'
import Marquees from './components/Marquees'
import Panels from './components/Panels'
import Previewers from './components/Previewers'
import Qrcodes from './components/Qrcodes'
import Steps from './components/Steps'
import Swipers from './components/Swipers'
import XProgresses from './components/XProgresses'
import XImgs from './components/XImgs'
import Actionsheets from './components/Actionsheets'
import Alerts from './components/Alerts'
import Confirms from './components/Confirms'
import InlineLoadings from './components/InlineLoadings'
import LoadMores from './components/LoadMores'
import Loadings from './components/Loadings'
import Msgs from './components/Msgs'
import Popups from './components/Popups'
import PopupHeaders from './components/PopupHeaders'
import PopOvers from './components/PopOvers'
import Spinners from './components/Spinners'
import Toasts from './components/Toasts'
import XDialogs from './components/XDialogs'

//import router from './router' //使用index.js作为router，同时注释掉后面的const router=...


Vue.use(VueRouter)

//cnpm install vuex-i18n --save //demo中会用到
// import vuexI18n from 'vuex-i18n';
// const store = new Vuex.Store({
//   modules: {
//     i18n: vuexI18n.store
//   }
// });
// Vue.use(vuexI18n.plugin, store);

import {LoadingPlugin} from 'vux'//当使用 this.$vux.loading 时
Vue.use(LoadingPlugin);

import {ToastPlugin} from 'vux'//当使用 this.$vux.toast 时
Vue.use(ToastPlugin);

import {ConfirmPlugin} from 'vux'
Vue.use(ConfirmPlugin);

import {AlertPlugin} from 'vux'
Vue.use(AlertPlugin);

import {DatetimePlugin} from 'vux'
Vue.use(DatetimePlugin);

const routes = [{
  path: '/',
  name:'HelloFromVux',
  component: HelloFromVux
},{
  path:'/hello',
  name:'hello',
  component:HelloWorld
},{
  path:'/icons',
  component:Icons
},{
  path:'/xicons',
  component:XIcons
},{
  path:'/xbuttons',
  component:XButtons
},{
  path:'/flexboxes',
  component:FlexBoxes
},{
  path:'/grids',
  component:Grids
},{
  path:'/stickies',
  component:Stickies
},{
  path:'/calendars',
  component:Calendars
},{
  path:'/cellboxes',
  component:CellBoxes
},{
  path:'/cellformpreviews',
  component:CellFormPreviews
},{
  path:'/cells',
  component:Cells
},{
  path:'/checkicons',
  component:CheckIcons
},{
  path:'/checkers',
  component:Checkers
},{
  path:'/checklists',
  component:CheckLists
},{
  path:'/datetimeviews',
  component:DatetimeViews
},{
  path:'/datetimeranges',
  component:DatetimeRanges
},{
  path:'/datetimes',
  component:Datetimes
},{
  path:'/formpreviews',
  component:FormPreviews
},{
  path:'/groups',
  component:Groups
},{
  path:'/switches',
  component:Switches
},{
  path:'/numbers',
  component:Numbers
},{
  path:'/inlinecalendars',
  component:InlineCalendars
},{
  path:'/popuppickers',
  component:PopupPickers
},{
  path:'/popupradios',
  component:PopupRadios
},{
  path:'/pickers',
  component:Pickers
},{
  path:'/raters',
  component:Raters
},{
  path:'/ranges',
  component:Ranges
},{
  path:'/selectors',
  component:Selectors
},{
  path:'/swipeouts',
  component:Swipeouts
},{
  path:'/searches',
  component:Searches
},{
  path:'/xswitches',
  component:XSwitches
},{
  path:'/xinputs',
  component:XInputs
},{
  path:'/xnumbers',
  component:XNumbers
},{
  path:'/xtextareas',
  component:XTextAreas
},{
  path:'/xaddresses',
  component:XAddresses
},{
  path:'/badges',
  component:Badges
},{
  path:'/cards',
  component:Cards
},{
  path:'/clockers',
  component:Clockers
},{
  path:'/countups',
  component:Countups
},{
  path:'/flows',
  component:Flows
},{
  path:'/marquees',
  component:Marquees
},{
  path:'/panels',
  component:Panels
},{
  path:'/previewers',
  component:Previewers
},{
  path:'/qrcodes',
  component:Qrcodes
},{
  path:'/steps',
  component:Steps
},{
  path:'/swipers',
  component:Swipers
},{
  path:'/xprogresses',
  component:XProgresses
},{
  path:'/ximgs',
  component:XImgs
},{
  path:'/actionsheets',
  component:Actionsheets
},{
  path:'/alerts',
  component:Alerts
},{
  path:'/confirms',
  component:Confirms
},{
  path:'/inlineloadings',
  component:InlineLoadings
},{
  path:'/loadmores',
  component:LoadMores
},{
  path:'/loadings',
  component:Loadings
},{
  path:'/msgs',
  component:Msgs
},{
  path:'/popups',
  component:Popups
},{
  path:'/popupheaders',
  component:PopupHeaders
},{
  path:'/popovers',
  component:PopOvers
},{
  path:'/spinners',
  component:Spinners
},{
  path:'/toasts',
  component:Toasts
},{
  path:'/xdialogs',
  component:XDialogs
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
