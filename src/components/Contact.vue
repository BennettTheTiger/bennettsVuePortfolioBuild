<template>
    <div>
        <h2>Connect with Bennett!</h2> 
        <hr/>
        <div class="socialLinks">
                    <a href="https://www.linkedin.com/in/bennett-schoonerman-1b6974105/" target="new"><i class="fab fa-linkedin icon"  @mouseover="msg ='View his professional and academic accomplishments. 💼'" @mouseout="msg = ''"></i></a>
                    <a href="https://github.com/BennettTheTiger" target="new"><i class="fab fa-github-square icon" @mouseover="msg ='Check out some of his coding projects. 👨‍💻'" @mouseout="msg = ''"></i></a>
                    <a href="https://codepen.io/Bennett96/" target="new"><i class="fab fa-codepen icon" @mouseover="msg = 'Peek at some of his front end experiments 💻.'" @mouseout="msg = ''"></i></a>
                    <a href="mailto:bas9386@rit.edu?subject=Hey Bennett!"><i class="fas fa-envelope-square icon" @mouseover="msg ='Send him an email at bas9386@rit.edu 📧'" @mouseout="msg = ''"></i></a>
                    <a href="tel:3155765496"><i class="fas fa-phone-square icon" @mouseover="msg = 'Give him a ring, 315-576-5496📱'" @mouseout="msg = ''"></i></a> 
                    <a href="https://www.tumblr.com/blog/bennettigme470" @mouseover="msg = 'Check out his physical computing blog. 🤖'" @mouseout="msg = ''" target="new"><i class="fab fa-tumblr-square"></i></a>
                    <div class="helpContainer">
                        <p id="helpTxt">{{msg}}</p>
                    </div>
                    <h4>Please <a href="https://drive.google.com/file/d/1i02XGrV2YJKpKRo7UrZgd7bdHY7S0r8R/view?usp=sharing" target="new">take a copy</a> of his current resumé.</h4>
        </div>

        
    </div>
</template>

<script>
export default {
  name: 'Contact',
  data: function () {
    return {
        msg: ""
    }
  }
}
</script>

<style scoped>
h2{
    position: relative;
    top: 50px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font: 1200;
}

hr{
    position: relative;
    top:50px;
        width: 50%;
        border: 2px solid orangered;
    }

.socialLinks{
    text-align: center;
    top:100px;
    position: relative;
}

.socialLinks i{
    padding: 10px;
    font-size: 2em;
    color: #333;
    transition: .25s;
}

.socialLinks i:hover{
    color: orangered;
   
}

.helpContainer{
    height: 50px;
    font-family: 'Merriweather', serif;
    color: #333;
}

h4{
    font-family: 'Merriweather', serif;
    color: #333;
    font-style: italic; 
    position: fixed;
    top: 450px; 
    width: 100vw;
    text-align: center;
    font-size: 1em;
}

h4 a {
    color: orangered;
}


</style>

