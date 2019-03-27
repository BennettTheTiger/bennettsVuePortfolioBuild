<template>
    <div>
        <div class="textContainer">
            <svg width=100% height=100% xmlns="http://www.w3.org/2000/svg">
            <defs id="defs">
                <clipPath id="mask">
                    <text text-anchor="start" class="text" x="20px" y="170px">Bennett</text>
                     <text text-anchor="start" class="text" x="20px" y="300px">Schoonerman</text>
                     <text text-anchor="start" class="text" x="20px" y="420px">{{adj}}</text>
                </clipPath>
            </defs>
            </svg> 
            <!-- Drive Video doesnt work in safari because of certificate so it blocks loading and click event listeners -->
            <video autoplay loop muted autobuffer playsinline>
                <source src="/assets/reelOneColor.mp4" type='video/mp4'/>
            </video>
            
        </div>
       
    </div>
</template>
<script>
const adjectives = ["Problem Solver","Developer","Videographer","Musician","Team Player","Explorer","Innovator"];
let index = 0;
export default {
  name: 'Home',
  data: function () {
    return {
        adj: "Problem Solver"
    }
  },
  methods: {
    greet() {
        this.adj = adjectives[index];
        index++;
        if(index >= adjectives.length) index = 0;
        setTimeout(this.greet,2000);
    }
  },
  mounted() {
     this.greet()
    },
}
</script>

<style lang="scss" scoped>
   .textMask{
       font-size: 12vw;
       margin: 0px;
       font-weight: bold;
       
   }

    .textContainer{
        position: relative;
        top:10vh;
        font-family: 'Merriweather', serif;
        display: flex; /* or inline-flex */
        flex-wrap: nowrap; 
        flex-direction: column;
    }

    video{
			top: 0px;
			height: 100vh;
			bottom: 0px;
			position: fixed;
			left: 0px;
			-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 -webkit-filter: for safari blur(5px)*/
			filter:  blur(0px) saturate(8) hue-rotate(180deg);
			z-index: 0;
			clip-path: url(#mask);
		}

    text{
		font-size: 5em;
		font-style: bold;
        font-family: 'Merriweather', serif;
    }

    @media screen and (min-width: 200px) {
        text {
            font-size: 1.5em;
        }
    }

   @media screen and (min-width: 400px) {
        text {
            font-size: 2.25em;
        }
    }

    @media screen and (min-width: 600px) {
        text {
            font-size: 4em;
        }
    }
    @media screen and (min-width: 800px) {
        text {
            font-size: 5em;
        }
    }
    @media screen and (min-width: 1000px) {
        text {
            font-size: 6.5em;
        }
    }

    
    svg{
			top: 0px;
            fill:orangered;
		}
</style>


<video autoPlay loop muted autobuffer="true">
            <source src="https://drive.google.com/uc?export=download&id=1JPCsdAJQ5yWwiUUVLudmUSHf--Dzo2tb" type='video/mp4'/>
        </video>




