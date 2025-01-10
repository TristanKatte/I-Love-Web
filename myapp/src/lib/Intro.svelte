<section class="intro-part main">
    <h1 class="main-heading">
        <span class="main-heading-primary">I Love Web</span>
        <span class="main-heading-secondary">it's awesome!</span>
      </h1>

</section>


<style>
.main {
  position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.main-heading {
  color: #777;
  text-transform: uppercase;
}

.main-heading-primary {
  display: block;
  font-size: 5.0rem;
  font-weight: 400;
  letter-spacing: 35px;
  animation: moveInLeft 3.5s ease-out;
}

.main-heading-secondary {
  font-family: sans-serif;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 31px;
  color: teal;
  animation: moveInRight 3.5s ease-out;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  
  80% {
    transform: translateX(10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  
  80% {
    transform: translateX(-10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

</style>