abstract class worker {
    name:string
    getName(){
        return this.name
    }
    abstract doTask1(): string
    abstract doTask2(): string
    abstract doTask3(): string
    abstract doTask4(): string
}

class Worker1 extends worker {
    doTask1(): string {
        return 'this is the task 1 of the worker ' + this.name
    }
    doTask2(): string {
        return 'this is the task 2 of the worker ' + this.name
    }
    doTask3(): string {
        return 'this is the task 3 of the worker ' + this.name
    }
    doTask4(): string {
        return 'this is the task 4 of the worker ' + this.name
    }
}

class WorkerFecade {
    workers: Array<worker>
    constructor(worker:worker)
    constructor(workers: Array<worker>)
    constructor(workers: Array<worker> | worker){
        if (Array.isArray(workers)){
            this.workers = workers
        } else {
            this.workers = [workers]
        }
    }
    perform(){
        this.workers.forEach(worker => {
            worker.doTask1()
            worker.doTask2()
            worker.doTask3()
            worker.doTask4()
        });
    }
}