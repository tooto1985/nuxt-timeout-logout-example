export default {
  data() {
    return {
      renewSid: null,
      checkSid: null,
      timeout: 10,
      seconds: null,
      eventList: ['mousemove', 'touchstart', 'scroll', 'resize', 'keydown', 'click'],
    }
  },
  methods: {
    _check() {
      this.seconds = this.timeout - parseInt((Date.now() - this.$cookies.get('enterTime')) / 1000);
      if (this.seconds <= 0) {
        this.$router.push('/');
      }
    },
    _renew() {
      clearTimeout(this.renewSid);
      this.renewSid = setTimeout(() => {
        // console.log('renew');
        this.$cookies.set('enterTime', Date.now(), {
          path: '/'
        });
      }, 100);
    }
  },
  mounted() {
    if (this.timeoutEnabled) {
      if (!this.checkSid) {
        // console.log('mixin mounted');
        this.eventList.forEach(event => {
          window.addEventListener(event, this._renew);
        });
        this.$cookies.set('enterTime', Date.now(), {
          path: '/'
        });
        this.checkSid = setInterval(this._check, 1000);
        this._check();
      }
    }
  },
  beforeDestroy() {
    if (this.timeoutEnabled) {
      if (this.checkSid) {
        // console.log('mixin beforeDestory');
        this.eventList.forEach(event => {
          window.removeEventListener(event, this._renew);
        });
        clearInterval(this.checkSid);
        this.checkSid = null;
      }
    }
  }
}