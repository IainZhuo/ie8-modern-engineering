// 低版本浏览器支持，最低支持到IE8
require('core-js/features/object/define-property')
require('core-js/features/object/create')
require('core-js/features/object/assign')
require('core-js/features/array/for-each')
require('core-js/features/array/index-of')
// require('core-js/features/array/map')
require('core-js/features/function/bind')
require('core-js/features/promise')

const Core = require('./core').default

const core = new Core()

core.init()
