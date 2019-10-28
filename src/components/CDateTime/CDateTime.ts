import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { tools } from '@src/store/Modules/tools'
import { toolsext } from '@src/store/Modules/toolsext'

import { date } from 'quasar'
import { CalendarStore } from '../../store/Modules'

@Component({
  name: 'CDateTime'
})

export default class CDateTime extends Vue {
  public $q
  public $t
  @Prop() public value!: Date
  @Prop({ required: false, default: '' }) public label: string
  @Prop({ required: false, default: '' }) public data_class!: string
  @Prop({ required: false, default: false }) public readonly!: boolean
  @Prop({ required: false, default: false }) public disable!: boolean
  @Prop({ required: false, default: '' }) public bgcolor!: string
  @Prop({ required: false, default: false }) public dense: boolean

  public mystyleicon: string = 'font-size: 1.5rem;'
  public showDateTimeScroller: boolean = false
  public saveit: boolean = false
  public myvalue: Date = new Date()
  public valueprec: Date = new Date()

  get getclass() {
    return 'calendar_comp ' + this.data_class
  }

  @Watch('showDateTimeScroller')
  public Opening() {
    if (this.showDateTimeScroller) {
      this.saveit = false
      this.valueprec = this.myvalue
      this.$emit('show')
    } else {
      if (!this.saveit)
        this.myvalue = this.valueprec
    }
  }

  public savetoclose() {
    this.saveit = true
    this.showDateTimeScroller = false
    this.$emit('savetoclose', this.myvalue, this.valueprec)
  }

  get scrollerPopupStyle280() {
    if (this.$q.screen.lt.sm) {
      return {
        width: '100vw',
        height: '100vh'
      }
    } else {
      return {
        maxHeight: '400px',
        height: '400px',
        width: '280px'
      }
    }
  }

  get locale() {
    return CalendarStore.state.locale
  }

  public mounted() {
    this.myvalue = this.value
  }

  public changeval(newval) {
    console.log('changeval', newval)
    this.$emit('update:value', newval)
  }
}
