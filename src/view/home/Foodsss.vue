<template>
  <div class="fontsize-30 box">
    <div class="pad-3 main">
      <div class="herder">
        <img src="../../assets/return-1.png" alt="" class="icon-return" />
        <p class="text">Local screencast</p>
      </div>
      <div>
        <input type="text" name="" id="" class="inp" />
      </div>
      <div class="ss">
          <div>
          <img src="../../assets/waaw.png" alt="" class="icon-waan">
          </div>
          <div class="aa">
              <p class="text2">Mirror guide</p>
              <p class="text3">common problem</p>
          </div>
      </div>
      <div class="chart">
          <div class="pp aout">
              <img src="../../assets/picture.png" alt="" class="icon-picture">
              <p class="text5">Picture</p>
              <p class="text5">Local screencast</p>
          </div>
          <div class="cc aout">
              <img src="../../assets/wallet.png" alt="" class="icon-picture">
              <p class="text5">file</p>
              <p class="text5">Local document</p>
          </div> 
      </div>
      <div class="boxs">
          <div class="circular">
              
          </div>
          <div>
              <p class="tes">Screen mirroring ...</p>
              <p class="tesa">moble screen shoring to TV</p>
          </div>
      </div>
      <div class="end">
          <div class="dis">
              <img src="../../assets/stopit.png" alt="" class="icon-stop">
              <span class="texs">Tiem out</span>
          </div>
          <div class="dist">
              <img src="../../assets/shutdown.png" alt="" class="icon-stop">
              <span class="texs">End</span>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: #c7aff7;
}
.main {
  background-color: #d7cffb;
  border-radius: 3rem;
}
.herder {
  height: 8rem;
}
.text {
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin-top: -4.5rem;
  margin-left: 10rem;
}
.icon-return {
  width: 2.4rem;
  height: 1.8rem;
  padding: 2rem;
}
.inp {
  width: 30rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: #efeffb;
  border: none;
  background-image: url(../../assets/seach.png); 
  background-repeat: no-repeat;
  background-position: 25rem; 
}
.icon-waan{
    width: 10rem;
    height: 10rem;
}
.text2{
  font-size: 2.6rem;
  font-weight: bold;
  margin: 0;
}
.text3{
    font-size: 1.8rem;
    margin: 0;
}
.ss{
    margin-top: 3rem;
    display: flex;
    background-color: #efeffb;
    border-radius: 3rem;
}
.aa{
    margin-top: 2rem;
}
.text5{
    font-size: 1.4rem;
    text-align: center;
}
.chart{
    display: flex;
    margin-top: 2rem;
}
.icon-picture{
    display: block;
    width: 4rem;
    margin:3rem 4rem;
    background-color: #d1d3ff;
}
 .pp{
     background-color: #7469fc;
     border-radius: 2rem;
       color: #fff;
 }
 .cc{
     background-color: #ffffff;
     border-radius: 2rem;
     margin-left: 3rem;
 }
 .aout{ 
     padding: 1rem; 
 }
 .circular{
     width: 6rem;
     height: 6rem;
     border-radius: 10rem;
     background-color: blue;
     margin: 0 1rem;
 }
 .boxs{
     display: flex;
     align-items: center; 
     margin-top: 2rem; 
     border-radius: 2rem;
     justify-content: center;
     background-color: #fbffff;
 }
 .tes{
     font-size: 1.8rem;
 }
 .tesa{
      font-size: 1.4rem;
 }
 .icon-stop{
     width: 1.8rem; 
 }
 .texs{
     font-size: 1.8rem;
     margin-left: 1rem;
 }
 .dis{  
     width: 14rem;
     border-radius: 1rem;  
     background-color: #ffffff;
     text-align: center;
 }
 .dist{  
     width: 14rem;
     border-radius: 1rem; 
     background-color: #ffffff;
    text-align: center;
    margin-left: 3rem;
 }
 .end{
    margin-top: 2rem; 
    display: flex;    
 }
</style>