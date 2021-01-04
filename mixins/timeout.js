export default {
  data() {
    return {
      checkSid: null,
      timeout: 10,
      enterTime: null,
      seconds: null,
      eventList: ['mousemove', 'touchstart', 'scroll', 'resize', 'keydown', 'click'],
    }
  },
  methods: {
    _check() {
      this.seconds = this.timeout - parseInt((Date.now() - this.enterTime) / 1000);
      if (this.seconds <= 0) {
        this.$router.push('/');
      }
    },
    _renew() {
      this.enterTime = Date.now();  
    }
  },
  mounted() {
    if (this.timeoutEnabled) {
      if (!this.checkSid) {
        console.log('mixin mounted');

        this.eventList.forEach(event => {
          window.addEventListener(event, this._renew);
        });



        this.enterTime = Date.now();
        this.checkSid = setInterval(this._check, 1000);
        this._check();
      }
    }
  },
  beforeDestroy() {
    if (this.timeoutEnabled) {
      if (this.checkSid) {
        console.log('mixin beforeDestory');

        this.eventList.forEach(event => {
          window.removeEventListener(event, this._renew);
        });

        clearInterval(this.checkSid);
        this.checkSid = null;
      }
    }
  }
}