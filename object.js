//objects vs array
// objects--- when you want to show all data based on
//one entity (ek j entity mata all data jota hoy) (expensive_laptop.at)
//(expensive_laptop.all users)
// let  user_data=[{name:"parth",email:"parth@gmail.com"},{name:"param",email:"param@gmail.com"}]


//create
//variable ={}
// key:value ---------> key-value structure
let user={
    name:"test",
    email:"test@gmail.com" ,
    roll_no: 70,
};
//access (dot vs square notation) 
user.name;
user.email;
//user.first-name;
//variable_name['key'];
//user[name]
let demo1 = "name"
user[demo1]//-------> convert into name(demo="name")
// ---> outpuut:test

//nesting and deep accesss
const user1={
    name:"test",
    address:{
        city:"surat",
        pin:39006,
        locations:{
            lat:24.0,
            lng:77.4,

        },
    },
    email:"test@gmail.com",

};
//-- nested obj
user1.address.locations.lat;//-------------> deep access
//user1.address.lovcation.lng;

//object destructuring:
let {lat, lng}=user1.address.locations;
let {name,email, address}=user1;
let {city}=user1.address;
let {lat:abc_lat}=user1.address.locations;
// destructure and rename variable name
let demo={
    first_name:"demo",
    last_name:"user",
    age:45,
    email:"demo@gmail.com",

};
//looping(for-in-looop)
//for (variable name in object_name){}
for (const key in demo){
    //console.log(key);
    //obj.key----> not working 
    //console.com(demo[key]);   
}

//copying objects:spred,object.assign,deep-cline
//spred
//let user_data={...demo};
let user_data={gender:"male",role:"user",...demo}// add key-value and copy object
//use case:state undate
//onject.assign-- copy and add keys-value
let user_data_assign=Object.assign({},demo);
//nothing will be add just copy
let user_data_assign1=Object.assign({phone_number:7802121432},demo); // add and copy 
//use case : default settings + user setting merg
// const defaultsrtting ={
// language:"en"
//};
//const userSettings={
// theme:"dark"
//};
//const finalSettings=Object.assign({},
// defaultSettings,userSetting);
//object.assign vs spred
//object assign()---- method ---- fs5 old version

// deep clone
let temp_user1_clone={...user1}
//user1_clone.addresss.city ="valsad"----> that will change value of user1 too
//issu: when you clone & copy nested object using 
//spred or object.assign into new variable that copy all value but nested object pass only refrence not copy
//firdt convert your object to string
//json
//json.stringify(obj._name)-- convert object into string
let clone_user1=JSON.parse(JSON.stringify(user1))
//deep clone =completely new memory
//use case:
//real time use:
// API response handling 
//avoid data mutation bugs

//object.key --- add all keys into array formate
let key_arr= Object.keys(demo);

//optional chaining computed properties
//user1.addresss.location.lng;
user?.address?.location?.lng;//--? optional chaining
//computed properties
let role="admin";
let user2={
    name:"test",
    email:"test@gmail.com",
    address:{
        city:"surat"
    },
    [role]:"test"

}
