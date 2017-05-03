//https://www.sitepoint.com/angular-2-tutorial/
export class Todo {
    id:number;
    title:string='';
    complete:boolean=false;
    constructor(values: Object={}){
        Object.assign(this,values);
    }
}
