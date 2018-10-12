export class Employee{ //data-model(sharable)
    id:number;
    name:string;
    email:string;
    dept:string;
    constructor(id:number,name:string,email:string,dept:string){
      this.id=id;
      this.name=name;
      this.email=email;
      this.dept=dept;
    }
  }