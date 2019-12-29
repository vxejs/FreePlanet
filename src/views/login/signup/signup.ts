import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { UserStore } from '@store'
import { tools } from '../../../store/Modules/tools'
import { toolsext } from '@src/store/Modules/toolsext'
import { CSignUp } from '../../../components/CSignUp'

@Component({
  components: { CSignUp }
})

export default class Signup extends Vue {
  public $t: any
  public adult: boolean = false

  @Watch('$route.params.invited')
  public changeadult() {
    console.log('$route.params.invited')
    this.adult = !!this.$route.params.invited
  }

  public created() {
    if (!tools.getCookie(tools.APORTADOR_SOLIDARIO, ''))
      tools.setCookie(tools.APORTADOR_SOLIDARIO, this.$route.params.invited)
  }

}
