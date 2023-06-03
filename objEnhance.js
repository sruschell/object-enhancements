//Same keys and values

function createInstructor(firstName, lastName){
    return{
      firstName,
      lastName
    };
  }

  //Computed Property Names
  const favoriteNumber = 42;
  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  };


  //Object Methods
  const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  };

  //createAnimal function
  function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    };
  }