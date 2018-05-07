class DogClass {
    constructor(){
        this.sound = 'wouf';
    }
    talk () {
        console.log('I would say ' + this.sound);
    }
}

Dog = () => {
    let sound = 'wouf function';
    return {
        talk: () => {
            console.log('I would say function ' + sound);
        }
    }
}

const areaCalculator = (s) => {
    const proto = {
      sum() {
        console.log('sum logic');
      },
    }
    return Object.assign(Object.create(proto), {shapes: s})
  }

  



  