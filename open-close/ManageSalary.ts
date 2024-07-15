export class ManageSalary {
    salary: { id: number; role: string; rate: number; }[];
    constructor (){
      this.salary=[
        {
            id:1,
            role:"developer",
            rate:300
        },
        {
            id:2,
            role:"designer",
            rate:200
        },
        {
            id:3,
            role:"tester",
            rate:100
        }
      ]
    }
    getData(){
        return this.salary
    }
    calculateSalary(empId:number,hours:number){
        let salary = this.salary.find((o)=>o.id === empId);
        if (!salary) {
            throw new Error('no salary found')
        }
        return hours * salary?.rate
    }
}

const salary = new ManageSalary()

console.log(salary.calculateSalary(1,8));
