
import config from '../config'

export default class DataCF {
  constructor () {
    const ctx = {}
    ctx.config = config
    this.ctx = ctx
  }

  init () {
    console.log('初始化完成')
    console.log('ctx:', this.ctx)
  }
}
