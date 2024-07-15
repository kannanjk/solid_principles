class FootBaller {
    name: string;
    age: number;
    role: string;
    constructor(name: string, age: number, role: string) {
        this.name = name
        this.age = age
        this.role = role
    }

    getfootBallerRole() {
        switch (this.role) {
            case "keeper":
                console.log(`the footBaller ${this.name} is a golkeeper`);
                break;
            case "defender":
                console.log(`the footBaller ${this.name} is a defender`);
            case 'midfielder':
                console.log(`The footballer, ${this.name} is a midfielder`);
                break;
            case 'forward':
                console.log(`The footballer, ${this.name} plays in the forward line`);
                break;
            default:
                throw new Error(`Unsupported animal type: error`);
        }
    }
}

const obj = new FootBaller("kannan",67,'keeper')
const obj2 = new FootBaller("jishnu",45,'midfielder')

obj.getfootBallerRole()
obj2.getfootBallerRole()


// open close principile
class Footballer {
    name: string;
    age: number;
    role: any;
    constructor(name:string, age:number, role:any) {
      this.name = name;
      this.age = age;
      this.role = role;
    }
  
    getRole() {
      return this.role.getRole();
    }
  }
  
// PlayerRole class uses the getRole method
class PlayerRole {
    getRole() {}
  }
  
  // Sub classes for different roles extend the PlayerRole class
  class GoalkeeperRole extends PlayerRole {
    getRole() {
      return 'goalkeeper';
    }
  }
  
  class DefenderRole extends PlayerRole {
    getRole() {
      return 'defender';
    }
  }
  
  class MidfieldRole extends PlayerRole {
    getRole() {
      return 'midfielder';
    }
  }
  
  class ForwardRole extends PlayerRole {
    getRole() {
      return 'forward';
    }
  }
  
  // Putting all of them together
  const hazard = new Footballer('Hazard', 32, new ForwardRole());
  console.log(`${hazard.name} plays in the ${hazard.getRole()} line`); // Hazard plays in the forward line
  
  const kante = new Footballer('Ngolo Kante', 31, new MidfieldRole());
  console.log(`${kante.name} is the best ${kante.getRole()} in the world!`); //Ngolo Kante is the best midfielder in the world!