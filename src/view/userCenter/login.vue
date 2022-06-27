<template>
  <div class="fontsize-30">
    <div class="boxt">
      <div class="sss"></div>
      <div class="sss"></div>
      <div class="sss"></div>
      <div class="sss"></div>
      <div class="sss"></div>
      <div class="sss"></div>
    </div>
    <div class="box">
      <div class="tu">
        <img src="../../assets/menue.png" alt="" class="icon" />
      </div>
      <div class="boxs">
        <p class="text">mirroring Cast screen</p>
        <p class="tex">Real-tiem screen sharing</p>
        <div>
          <img src="../../assets/clock.png" alt="" class="icon-clock" />
        </div>
      </div>
      <div class="watch">
        <img src="../../assets/watch.png" alt="" class="icon-watch" />
      </div>
    </div>
    <div class="foot">
      <div class="lss">
        <div>
          <p class="texa">Please choose</p>
          <p class="texas">Choose a screencast sc ene</p>
        </div>
        <div>
          <img src="../../assets/news.png" alt="" class="icon-news" />
        </div>
      </div>
      <div class="asd">
        <div class="asx">
          <img src="../../assets/mirroring.png" alt="" class="icon-mirroring" />
        </div>
        <div class="ssss">
          <p class="tes">Screen mirroring</p>
          <p class="tesa">moble screen shoring to TV</p>
        </div>
      </div>
      <div class="asda">
        <div class="asx">
          <img src="../../assets/mirroring.png" alt="" class="icon-mirroring" />
        </div>
        <div class="ssss">
          <p class="tes">Screen mirroring</p>
          <p class="tesa">moble screen shoring to TV</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boxt {
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: -1;
}
.tu {
  height: 6rem;
}
.sss {
  width: 6.25rem;
  height: 100vh;
}
.boxt :nth-child(odd) {
  background-color: #7266fa;
}
.boxt :nth-child(even) {
  background-color: #7c71fe;
}
.boxs {
  padding-left: 4rem;
  color: #fff;
}
.text {
  font-size: 2rem;
}
.tex {
  font-size: 1.4rem;
  margin-top: 0.5rem;
}
.icon-clock {
  margin-top: -2rem;
  margin-left: 24rem;
  background-color: #9ba1f8;
}
.watch {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-watch {
  width: 28rem;
  height: 25rem;
}
.texa {
  font-size: 2rem;
}
.texas {
  font-size: 1.8rem;
}
.icon-news {
  width: 3rem;
  margin-left: 4rem;
  margin-top: 2rem;
}
.lss {
  display: flex;
  align-items: center;
}
.foot {
  padding-left: 3rem;
  background-image: linear-gradient(#7e79f1, #7165f9);
  border-radius: 2rem; 
  margin-top: -2rem;
}
.tes {
  font-size: 1.8rem;
}
.tesa {
  font-size: 1.6rem;
}
.asd {
    width: 32rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
   padding:2.4rem 0;
   border-radius: 3rem;
   margin-top: 1rem;
   margin-bottom: 2rem;
}
.asda{
     width: 32rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
   padding:2rem 0;
   border-radius: 3rem;  
}
.asx{
    width: 5rem;
    height: 5rem;
    background-color: blue;
    text-align: center;
    line-height: 5rem;
      margin-left: 1rem;
    border-radius: 5rem;
}
.icon-mirroring{
    width: 3rem;   
}
.ssss{
    margin-left: 2rem;
}
</style>