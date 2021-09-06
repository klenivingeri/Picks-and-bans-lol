 var data = [
   {
    name: 'Renecton',
    img: './img/renekton.jpg',
    position: '-230px 300px',
    size: '600px',
    spell1: './img/spell/teleport.jpg',
    spell2: './img/spell/flash.jpg'

  },
  {
    name: 'Trundle',
    img: './img/trundle.jpg',
    position: '-230px 300px',
    size: '600px',
    spell1: './img/spell/smite.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Ziggs',
    img: './img/ziggs.jpg',
    position: '-230px 200px',
    size: '500px',
    spell1: './img/spell/ignite.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Ashe',
    img: './img/ashe.jpg',
    position: '-230px 280px',
    size: '600px',
    spell1: './img/spell/healt.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Braum',
    img: './img/braum.jpg',
    position: '300px 320px',
    size: '600px',
    spell1: './img/spell/ignite.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Gnar',
    img: './img/gnar.jpg',
    position: '250px 180px',
    size: '500px',
    spell1: './img/spell/teleport.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Maokai',
    img: './img/maokai.jpg',
    position: '-200px -90px',
    size: '500px',
    spell1: './img/spell/smite.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Ryze',
    img: './img/ryze.jpg',
    position: '-250px 220px',
    size: '500px',
    spell1: './img/spell/ignite.jpg',
    spell2: './img/spell/flash.jpg'
  },{
    name: 'Ezreal',
    img: './img/ezreal.jpg',
    position: '-230px 300px',
    size: '600px',
    spell1: './img/spell/healt.jpg',
    spell2: './img/spell/flash.jpg'
  },
  {
    name: 'Bardo',
    img: './img/bardo.jpg',
    position: '-230px 300px',
    size: '600px',
    spell1: './img/spell/ignite.jpg',
    spell2: './img/spell/flash.jpg'
  }
 ]


class SelectionChamp{ 
  constructor(elemento, data){
    this.championSelect = data
    this.elemento1 = [...elemento]
    this.play = 60
    this.insertBackground()
    this.time()
  }
  time(){

    setInterval(() => {
      this.play--
      document.querySelector('.time-r').innerHTML = `:${this.play}`
      document.querySelector('.time-b').innerHTML = `:${this.play}`
      console.log(this.play)
      if(this.play == 0){
        clearInterval();
        console.log('entrou')
      }
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

}

let selection = new SelectionChamp(document.querySelectorAll('.champion'), data);
