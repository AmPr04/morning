# morning
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Good Morning</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Sacramento&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <div class="sky">
    <div class="sun"><img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-cute-sun-with-smile-face-in-pixel-art-style-png-image_13008100.png"></img></div>
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="bird"> <img src="https://i.redd.it/nwxaafrehz281.png"></img></div>
    <h1 class="greeting greeting1">Good Morning! ☀️</h1>
  </div>

 
  <div class="afternoon">
    <div class="sun2"><img src="https://static.vecteezy.com/system/resources/thumbnails/031/760/790/small_2x/pixel-art-happy-sun-cartoon-character-png.png"></img></div>
     <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="flowers">
      <div class="flower">
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="center"></div>
      </div>

    </div>
    <h1 class="greeting greeting2">Good Afternoon! ☀️</h1>
  </div>

  <div class="night">
    <div class="moon"><img src="https://pnghq.com/wp-content/uploads/2023/02/pixel-moon-png-1161.png"></img></div>
    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
  </div>
    <div class="moth"> <img src="https://preview.redd.it/fx90pbl0ntc91.png?auto=webp&s=4501f956ae1c0d533f31946655ca31d98d334267"></img></div>
    <h1 class="greeting greeting3">Good Night! 🌙</h1>
  </div>

  <script src="script.js"></script>
</body>
</html>


const hour = new Date().getHours();
const sky = document.querySelector('.sky');
const night = document.querySelector('.night');
const day = document.querySelector('.afternoon');

// You can customize the time ranges as needed
if (hour >= 6 && hour < 12) {
  sky.classList.add('visible');
} else if (hour >= 19| hour < 5) {
  night.classList.add('visible');
} else (hour >= 12 && hour < 19); {
  day.classList.add('visible');
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  font-family: 'Comic Sans MS', 'Press Start 2P', cursive, sans-serif;
}
*{
    font-family: "Miltonian", serif;
}

.miltonian-regular {
  font-family: "Miltonian", serif;
  font-weight: 400;
  font-style: normal;
}

/* day */
.sky {
  background: linear-gradient(to top, #f1f4c4, #8e8bf0);
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  animation: sunriseSky 8s ease-in-out forwards;
}
.sun >img{
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  animation: riseSun 8s ease-out forwards;
}


.greeting1 {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #fdfdfd;
  opacity: 0;
  text-shadow: 2px 2px 6px #cb5858;
  animation: fadeIn 2 ease 9s forwards, bounce 2s ease-in-out infinite alternate 6s;
}

.cloud {
  width: 150px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  animation: floatClouds 30s linear infinite;
  opacity: 0.8;
  box-shadow: 60px 0 #ffffff, 30px -20px #fff, 90px -10px #fff;
}

.cloud1 {
  left: -200px;
  top: 15%;
  animation-delay: 0s;
}

.cloud2 {
  left: -250px;
  top: 25%;
  animation-delay: 10s;
}

.bird > img{
    width: 50px;
  position: absolute;
  left: -50px;
  top: 25%;
  animation: flyBird 15s linear infinite;
}

@keyframes riseSun {
  to {
    bottom: 45%;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes sunriseSky {
  to {
    background: linear-gradient(to top, #f4edd0, #b5f3ff);
  }
}

@keyframes floatClouds {
  0% { transform: translateX(0); }
  100% { transform: translateX(130vw); }
}

@keyframes flyBird {
  100% { transform: translateX(0); }
  0% { transform: translateX(120vw); }
}

@keyframes bounce {
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -52%) scale(1.05); }
}
@media (max-width: 768px) {
  .greeting1 {
    font-size: 1.5rem;
  }
  .sun {
    width: 80px;
    height: 80px;
  }
  .cloud {
    width: 100px;
    height: 50px;
  }
}

/*afternoon*/
.afternoon {
  background: linear-gradient(to top, #a9e3f9,#3dd7f6);
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  animation: sunUp 8s ease-in-out forwards;
}



  /* Afternoon sun */
.sun2 > img {
  width: 120px;
  height: 120px;
  position: absolute;
  align-items: center;
  bottom: 270px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease-in-out infinite alternate 6s, riseSun 8s ease-in-out forwards;
}

@keyframes sunUp {
  to{
    background: linear-gradient(to top, #a9e3f9, #3dd7f6);
  }
}

/* flowers */
.flowers{
  position:relative;
  width: 100px;
  height: 100px;
}

.petal {
  width: 40px;
  animation: flowerBloom 8s ease-in-out forwards;
} 

.petal:nth-child(1) { transform: rotate(0deg) translateX(20px); }

@keyframes flowerBloom {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/*  night */
.night {
  background: linear-gradient(to top, #f1f4c4, #211cca);
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  animation: sunriseSet 8s ease-in-out forwards;
}
.moon >img{
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  animation: riseMoon 8s ease-out forwards;
}
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.star {
  width: 4px;
  height: 4px;
  background: white;
  position: absolute;
  border-radius: 50%;
  animation: twinkle 2s infinite ease-in-out;
}

/* Random positions for stars */
.star:nth-child(1) { top: 20%; left: 10%; }
.star:nth-child(2) { top: 40%; left: 50%; }
.star:nth-child(3) { top: 60%; left: 30%; }
.star:nth-child(4) { top: 80%; left: 70%; }
.star:nth-child(5) { top: 10%; left: 90%; }
/* Add more with different top/left % for variety */

.greeting2 {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #fdfdfd;
  opacity: 0;
  text-shadow: 2px 2px 6px #8190a0;
  animation: fadeIn 2 ease 9s forwards, bounce 2s ease-in-out infinite alternate 6s;
}

.moth> img{
    width: 50px;
  position: absolute;
  left: -50px;
  top: 25%;
  rotate: -15deg;
  animation: flyBird 12s linear infinite;
}

@keyframes riseMoon {
  to {
    bottom: 45%;
  }
}

@keyframes sunriseSet {
  to {
    background: linear-gradient(to top, #5c69b4, #020d4b);
  }
}

@media (max-width: 768px) {
  .greeting2 {
    font-size: 1.5rem;
  }
  .moon {
    width: 80px;
    height: 80px;
  }
}
@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.2); }
}

/*toggle*/
.sky, .night{
  display: none;
}
.visible {
  display: block;
}
