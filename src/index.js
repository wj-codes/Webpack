import './index.less'
console.log('进阶12121');
const sum = (num1,num2)=>{
    return num1+num2;
}
const result = sum(5,10);
console.log('result',result);
class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}
const animal = new Animal('边牧',2);
console.log('animal:',animal);