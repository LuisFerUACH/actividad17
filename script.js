const app = Vue.createApp({
  data() {
    return{
      estatus: true,
      estatus2: false,
      imagen: "images/focoOff.png"
    }
  },
  methods: {
    cambiarEstatus(){
      if(this.estatus2 == true){
        this.imagen = "images/focoOff.png"
        this.estatus2 = false
      }else {
        this.imagen = "images/focoOn.png"
        this.estatus2 = true
      }
    }
  },
})

const vm = app.mount('#app')
