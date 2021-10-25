new Vue ({
    el:'#vue-app',
    data: {
      available: false,
      hidden: false
    },

  methods: {

  },

  computed: {
    compClasses: function(){
      return {
        available: this.available,
        hidden: this.hidden,
      }
      
    }
  }
});
