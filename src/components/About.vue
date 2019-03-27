<template>
    <div>    
        <img id="myMug" src="/me.png" alt="Photo of Bennett"/>
        <article>
            <h2>About Bennett</h2>
            <hr/>
            <p>Bennett is currently in his final semester at Rochester Institute of Technology. He will graduate in May 2019 earning his bachelor's degree in New Media Interactive Development. While his major is unique, his undergrad course work has given him valuable skills in web development, graphic design, native iOS development with swift, arduino microcontrollers, and AR and VR development using the Unity engine to name a few. Of all the courses he has taken, he especially enjoys working with web technologies and learning about IoT(internet of things) and interfacing with connected devices.</p>
            <p>Outside of his coursework, Bennett enjoys taking in all of the beauty that Upstate New York has to offer by hiking in state parks, and spending time on the Finger Lakes or Lake Ontario. He is passionate about music and plays piano, ukulele, and guitar. Occasionally jamming in a band when time allows. His latest endeavor is designing models and 3D printing parts to bring his IoT ideas to life.</p>
        </article>

    </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
    h2{
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        padding-top: 10px;
    }

    p{
        font-family: 'Merriweather', serif;
        padding-right: 20px;
        font-size: .8em;
        padding-left: 70px;
        padding-top: 10px;
    }

    #myMug{
        align-content: center;
        image-rendering: crisp-edges;
        height: 200px;
        border-radius: 50%;
        position: relative;
        display:block;
        margin:auto;
        
    }

    #container{
        display: flex;
        width: 100%;
    }

    hr{
        width: 50%;
        border: 2px solid orangered;
    }
</style>

