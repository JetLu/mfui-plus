import type { App } from 'vue'
import ElAffix from '@missfresh/affix'
import ElAlert from '@missfresh/alert'
import ElAside from '@missfresh/aside'
import ElAutocomplete from '@missfresh/autocomplete'
import ElAvatar from '@missfresh/avatar'
import ElBacktop from '@missfresh/backtop'
import ElBadge from '@missfresh/badge'
import ElBreadcrumb from '@missfresh/breadcrumb'
import ElBreadcrumbItem from '@missfresh/breadcrumb-item'
import ElButton from '@missfresh/button'
import ElButtonGroup from '@missfresh/button-group'
import ElCalendar from '@missfresh/calendar'
import ElCard from '@missfresh/card'
import ElCarousel from '@missfresh/carousel'
import ElCarouselItem from '@missfresh/carousel-item'
import ElCascader from '@missfresh/cascader'
import ElCascaderPanel from '@missfresh/cascader-panel'
import ElCheckbox from '@missfresh/checkbox'
import ElCheckboxButton from '@missfresh/checkbox-button'
import ElCheckboxGroup from '@missfresh/checkbox-group'
import ElCol from '@missfresh/col'
import ElCollapse from '@missfresh/collapse'
import ElCollapseItem from '@missfresh/collapse-item'
import ElCollapseTransition from '@missfresh/collapse-transition'
import ElColorPicker from '@missfresh/color-picker'
import ElContainer from '@missfresh/container'
import ElDatePicker from '@missfresh/date-picker'
import ElDialog from '@missfresh/dialog'
import ElDivider from '@missfresh/divider'
import ElDrawer from '@missfresh/drawer'
import ElDropdown from '@missfresh/dropdown'
import ElDropdownItem from '@missfresh/dropdown-item'
import ElDropdownMenu from '@missfresh/dropdown-menu'
import ElEmpty from '@missfresh/empty'
import ElFooter from '@missfresh/footer'
import ElForm from '@missfresh/form'
import ElFormItem from '@missfresh/form-item'
import ElHeader from '@missfresh/header'
import ElIcon from '@missfresh/icon'
import ElImage from '@missfresh/image'
import ElImageViewer from '@missfresh/image-viewer'
import ElInfiniteScroll from '@missfresh/infinite-scroll'
import ElInput from '@missfresh/input'
import ElInputNumber from '@missfresh/input-number'
import ElLink from '@missfresh/link'
import ElLoading from '@missfresh/loading'
import ElMain from '@missfresh/main'
import ElMenu from '@missfresh/menu'
import ElMenuItem from '@missfresh/menu-item'
import ElMenuItemGroup from '@missfresh/menu-item-group'
import ElMessage from '@missfresh/message'
import ElMessageBox from '@missfresh/message-box'
import ElNotification from '@missfresh/notification'
import ElOption from '@missfresh/option'
import ElOptionGroup from '@missfresh/option-group'
import ElPageHeader from '@missfresh/page-header'
import ElPagination from '@missfresh/pagination'
import ElPopconfirm from '@missfresh/popconfirm'
import ElPopover from '@missfresh/popover'
import ElPopper from '@missfresh/popper'
import ElProgress from '@missfresh/progress'
import ElRadio from '@missfresh/radio'
import ElRadioButton from '@missfresh/radio-button'
import ElRadioGroup from '@missfresh/radio-group'
import ElRate from '@missfresh/rate'
import ElRow from '@missfresh/row'
import ElScrollbar from '@missfresh/scrollbar'
import ElSelect from '@missfresh/select'
import ElSlider from '@missfresh/slider'
import ElStep from '@missfresh/step'
import ElSteps from '@missfresh/steps'
import ElSubmenu from '@missfresh/submenu'
import ElSwitch from '@missfresh/switch'
import ElTabPane from '@missfresh/tab-pane'
import ElTable from '@missfresh/table'
import ElTableColumn from '@missfresh/table-column'
import ElTabs from '@missfresh/tabs'
import ElTag from '@missfresh/tag'
import ElTimePicker from '@missfresh/time-picker'
import ElTimeSelect from '@missfresh/time-select'
import ElTimeline from '@missfresh/timeline'
import ElTimelineItem from '@missfresh/timeline-item'
import ElTooltip from '@missfresh/tooltip'
import ElTransfer from '@missfresh/transfer'
import ElTree from '@missfresh/tree'
import ElUpload from '@missfresh/upload'
import ElSpace from '@missfresh/space'
import ElSkeleton from '@missfresh/skeleton'
import ElSkeletonItem from '@missfresh/skeleton-item'
import ElCheckTag from '@missfresh/check-tag'
import ElDescriptions from '@missfresh/descriptions'
import ElDescriptionsItem from '@missfresh/descriptions-item'
import ElResult from '@missfresh/result'
import ElSelectV2 from '@missfresh/select-v2'

import { use, i18n } from '@missfresh/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@missfresh/utils/config'
import { setConfig } from '@missfresh/utils/config'
import isServer from '@missfresh/utils/isServer'
import dayjs from 'dayjs'

type DWindow = Window &
  typeof globalThis & {
    dayjs?: typeof dayjs
  }

// expose Day.js to window to make full bundle i18n work
if (!isServer) {
  const _window: DWindow = window

  if (!_window.dayjs) {
    _window.dayjs = dayjs
  }
}

const version = version_ // version_ to fix tsc issue

const locale = use

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  ElAffix,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCheckTag,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSubmenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElUpload,
  ElSpace,
  ElSkeleton,
  ElSkeletonItem,
  ElDescriptions,
  ElDescriptionsItem,
  ElResult,
  ElSelectV2,
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopover,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  ElAffix,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCheckTag,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInfiniteScroll,
  ElInput,
  ElInputNumber,
  ElLink,
  ElLoading,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSubmenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElUpload,
  ElSpace,
  ElSkeleton,
  ElSkeletonItem,
  ElDescriptions,
  ElDescriptionsItem,
  ElResult,
  ElSelectV2,
  version,
  install,
  locale,
}

export default {
  version,
  install,
}
