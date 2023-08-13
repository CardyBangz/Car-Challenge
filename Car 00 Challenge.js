

Part 1
=======================================================================
Vehicle{
    constructor(make,body,year){
        this.make=make;
        this.body=body;
        this.year=year;
    }
 honk(){
    return "Beep"
 }
 toString(){
    return "This vehicle is a ${this.body} is from ${this.make} made in ${this.year}"
 }
}
======================================================================
Part 2

class car extends Vehicle{
   constructor(make,body,year){
   super(make,body,year);
   this.numWheels=4;
}
}
======================================================================
Part 3

class Motorcycle extends Vehicle{
    constructor(make,body,year){
        super(make,body,year);
        this.numWheels=2;
    }
    honk(){
        return 'VROOOOOM'
    }
}
=======================================================================
Part 4

class Garage extends Vehicle{
    constructor(capacity){
        this.vehicles=[];
      this.capacity=capacity;  
    }
    if(this.vehicles=capacity){
        return 'Sorry we are full'
    if(!==this.vehicles){
        return 'Sorry that is not a vehicle'
    }
    }

}