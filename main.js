 import { data, faceChamp } from './data.js'


class SelectionChamp{ 
  constructor(elemento1,elemento2, data, faceChamp){
    this.championSelect = data
    this.faceChapions = faceChamp
    this.elemento1 = [...elemento1]
    this.elemento2 = [...elemento2]
    this.play = 60;
    this.insertBackground()
    this.time()
    this.insertBackgroundBanChampion()
  }
  time(){

    let tempo = setInterval(() => {
      this.play--
      document.querySelector('.time-r').innerHTML = this.play >= 10 ? `:${this.play}` : `:0${this.play}`
      document.querySelector('.time-b').innerHTML = this.play >= 10 ? `:${this.play}` : `:0${this.play}`
      this.play == 0 ? clearInterval(tempo) : '' ;
    }, 1000);

  }
  insertBackground(){
    [...this.elemento1].forEach((el ,index)=>{
      el.style.backgroundImage = `url('${this.championSelect[index].img}')`;
      el.style.backgroundPosition = this.championSelect[index].position;
      el.style.backgroundSize = this.championSelect[index].size;
      if(index <= 4 ){
        el.children[0].children[0].style.backgroundImage = `url('${this.championSelect[index].spell1}')`
        el.children[0].children[1].style.backgroundImage = `url('${this.championSelect[index].spell2}')`
        el.children[1].innerHTML = this.championSelect[index].name;
      }else{
        el.children[1].children[0].style.backgroundImage = `url('${this.championSelect[index].spell1}')`
        el.children[1].children[1].style.backgroundImage = `url('${this.championSelect[index].spell2}')`
        el.children[0].innerHTML = this.championSelect[index].name;
      }
    })
  }
  insertBackgroundBanChampion(){
    [...this.elemento2].forEach((el, index)=>{
      el.style.backgroundImage = `url('${this.faceChapions[index].img}')`;
      el.style.backgroundPosition = this.faceChapions[index].position;
      el.style.backgroundSize = this.faceChapions[index].size;
    })
  }
}

let selection = new SelectionChamp(
  document.querySelectorAll('.champion'),
  document.querySelectorAll('.ban-champion'),
  data, 
  faceChamp);
