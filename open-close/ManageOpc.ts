import {ManageSalary} from './ManageSalary'


const salary = new ManageSalary()

  function addSalry(id:number,role:string,rate:number){
   return salary.salary.push({id,role,rate})
  }
 
addSalry(4,'manager',50)
  console.log(salary.getData());
  