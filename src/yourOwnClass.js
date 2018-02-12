//create a class-subclass structure and implement it using javascript classes.
//be sure each have at least one method on them.
//Export the parent class in one file and import the child class in another

class spaceDawgz {
    constructor (name, weight) {
        this.name = name;
        this.weight = weight;
    }


getWeight() {
    return "This Spacedawg's name is: " + this.name + " and its weight is: " + this.weight + "lbs.";
}
}

let spaceDog1 = new spaceDawgz("Pluto", 1000);
console.log(spaceDog1.getWeight());


