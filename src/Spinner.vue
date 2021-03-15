<template>
    <div>
        <div :style="spinnerContainer()" class="spinner-container">
            <div :style="spinner()" class="spinner">
                <img
                    :class="type"
                    :style="imageStyles()"
                    :src="src">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    src: {
      type: String,
      required:true,
    },
    top:{
        type:String,
        default: '50%'
    },
    overlay:{
        type:String,
        default:'rgba(255, 255, 255, 0.0)'
    },
    width:{
        type:String,
        default:'50px'
    },
    type:{
        type: String,
        default:'rotating'
    }
  },
  methods:{
      spinner(){
          return{
            top:this.top,
          }
      },
      spinnerContainer(){
          return{
              backgroundColor:this.overlay
          }
      },
      imageStyles(){
          return{
              width:this.width,
          }
      }
  },
  mounted() {
  }
};
</script>

<style lang="css" scoped>
    .spinner-container{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 998;
    }
    .spinner{
        position:absolute;
        opacity:1;
        left:50%;
        z-index: 999;
        transform: translate(-50%, -50%);
    }

    .breathing{
        -webkit-animation: breathing 1s ease-out infinite normal;
        animation: breathing 1s ease-out infinite normal;
        -webkit-font-smoothing: antialiased;
    }
    .scale-up {
        -webkit-animation: rotate-scale-up 1s both infinite;
	    animation: rotate-scale-up 1s both infinite;
    }
    .spinner {
      animation: spinner-container-animation 1200ms infinite;
    }
    .jumping {
        -webkit-animation: jumping 0.7s infinite  alternate;
        animation: jumping 0.7s infinite  alternate;
    }
    .linear-rotating {
        -webkit-animation: rotating 1.2s linear infinite;
        -moz-animation: rotating 1.2s linear infinite;
        -ms-animation: rotating 1.2s linear infinite;
        -o-animation: rotating 1.2s linear infinite;
        animation: rotating 1.2s linear infinite;
    }
    .rotating {
        -webkit-animation: rotating 1.2s infinite;
        -moz-animation: rotating 1.2s infinite;
        -ms-animation: rotating 1.2s infinite;
        -o-animation: rotating 1.2s infinite;
        animation: rotating 1.2s infinite;
    }

    @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes breathing {
        0% {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }

        25% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        60% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        100% {
            -webkit-transform: scale(0.83);
            transform: scale(0.83);
        }
    }

    @keyframes breathing {
        0% {
            -webkit-transform: scale(0.8);
            -ms-transform: scale(0.8);
            transform: scale(0.8);
        }

        25% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }

        60% {
            -webkit-transform: scale(0.9);
            -ms-transform: scale(0.9);
            transform: scale(0.9);
        }

        100% {
            -webkit-transform: scale(0.83);
            -ms-transform: scale(0.83);
            transform: scale(0.83);
        }
    }

    @-webkit-keyframes jumping {
        0% { transform: translateY(0); }
        100% { transform: translateY(-15px); }
    }
    @keyframes jumping {
        0% { transform: translateY(0); }
        100% { transform: translateY(-15px); }
    }
    @-webkit-keyframes rotate-scale-up {
        0% {
            -webkit-transform: scale(1) rotateZ(0);
            transform: scale(1) rotateZ(0);
        }
        50% {
            -webkit-transform: scale(1.5) rotateZ(180deg);
            transform: scale(1.5) rotateZ(180deg);
        }
        100% {
            -webkit-transform: scale(1) rotateZ(360deg);
            transform: scale(1) rotateZ(360deg);
        }
    }
    @keyframes rotate-scale-up {
        0% {
            -webkit-transform: scale(1) rotateZ(0);
            transform: scale(1) rotateZ(0);
        }
        50% {
            -webkit-transform: scale(1.5) rotateZ(180deg);
            transform: scale(1.5) rotateZ(180deg);
        }
        100% {
            -webkit-transform: scale(1) rotateZ(360deg);
            transform: scale(1) rotateZ(360deg);
        }
    }

</style>

