// Write a “person” class to hold all the details.

class person {
    constructor (firstName, lastName, education, profession, experience){
      this. firstName = firstName;
      this. lastName = lastName;
      this. education = education;
      this. profession = profession;
      this. experience = experience;
      }
      getDetails () {
        return (`The person ${this.firstName} ${this.lastName}, has completed ${this.education} and working as ${this.profession} with an experience of ${this.experience} years.`)
      }
  }
  let person1 = new person ("Givitha", "S", "B.Tech", "Software Engineer", 5);
  let person2 = new person ("Mahendran", "R", "B.E", "Graphics Designer", 6);

  
  console.log(person1.getDetails());
  console.log(person2.getDetails());
