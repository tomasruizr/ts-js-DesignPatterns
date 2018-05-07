// This may be achieved working with EventEmmiter for both comunication methods or only to notify consumers
class Mediator {
    consumers:Array<Consumer>
    doOnMediator(){
        this.consumers.forEach(consumer => {
            consumer.doOnConsumer();
        });
    }
}
class Consumer{
    mediator:Mediator
    constructor(mediator:Mediator){
        this.mediator= mediator
    }
    doOnConsumer(){
        console.log('this was called by the Mediator')
    }
    onEvent(){
        this.mediator.doOnMediator()
    }
}