let user1={
    name:"praga",
    age:25,
    address:{
        city:"chennai",
        country:"india"
    }
}
console.log(user1.address.country);
let user2=user1;
 let temp=user2;
 temp.age=30;
 console.log(temp);
 console.log(user1);

function sum(a,b){
    console.log(a+b);

} 
sum(12,34);
let arr=[1,3,4,6,8];
arr.map((array)=>{
    console.log(array);
})