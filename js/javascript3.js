// ====================    OBJECT ORIENTED PROGRAMMING =================

/* 
 we know that javascript has own properties and method which
 we can use it we have an array and it has own properties and method 
 and string is not an  object but we can use the the string as  an object and 
 apply the properties on it just like a length and find the string length 
 in js we can create pur own object and then own properties and methods 
*/
// var userOneEmail = 'fatimaarshad091@gmail.com';
// var userOneName = 'fatima';
// var userOneFriends = ['rabia'];

// var userTwoEmail = 'noor118@gmail.com';
// var userTwoName = 'noor';
// var userTwoFriends = ['rabia', 'abeera'];

// var userThreeEmail = 'hyesoo091@gmail.com';
// var userThreeName = 'hyesoo';
// var userThreeFriends = ['rabia', 'abeera', 'noor'];

// function login(email){
// console.log(email , 'is now available');
// }
// function logout(email){
//     console.log(email,'has logout');
// }
// function logFriends(friends){
//     friends.forEach( friend => {
//         console.log(friend)
//     });
// }
// login(userOneEmail)

/* the object is capsture and multiple property are initialize means encapsulation*/
/* =========== OBJECT LITERALS ==========  */
var userOne = {
    email:'fatimaarshad118@gmail.com',
    name:'fatima',
    login(){ 
        // this word meaning change when you use the outside of the object which point to the window object 
        console.log(this.email,'is login');
    },
    logout(){ 
        // es6 help to without function word to create a function 
        console.log(this.email, 'has logout');
    }
}
console.log(userOne.name)
/* =========== UPDATE THE OBJECT  ==========  */
 userOne.name = 'noor'
 var prop = 'name';
 console.log( 
    userOne[prop]
 )
 prop = 'email';
 console.log(userOne[prop])
//  we can also create an new object property 
userOne.age = 19;
console.log(userOne)
/* =========== CLASSES ==========  */
// classes are like in js is blueprint 
// property name of the objects & the value of the property means instances 
// classes 

class User { 

/* =========== CLASS CONSTRUCTOR  ==========  */
// construct our object and create them 

constructor(email,name){
    this.email = email;
    this.name = name;
    this.score = 0;
}
/* =========== CLASS METHOD ==========  */
login(){
    console.log(this.email , 'user is log in ');
    return this ;
}
logout(){
    console.log(this.email, 'user is logged out');
    return this;
}
getScore(){
    this.score++;
    console.log(this.email , 'user scored is ', this.score);
    return this;
}

}
/* =========== CLASS INHERITANCE ==========  */
class Admin extends User{
    deleteUser(user){
        users = users.filter(p =>{
            return p.email != user.email
        })
    }
}
// these above are called instance of the class 
var User1 = new User('fatimaarshad_art@gmail.com', 'fatima arshad');
var User2 = new User('noor118@gmail.com', 'noor')
var admin = new Admin('minmin@gmail.com', 'minmin')
console.log(User1)
console.log(User2)
/* =========== CLASS chaining ==========  */
// this method return the object of the exist function
User1.login().getScore().getScore().logout()
// 
User2.logout()
var users = [User1, User2 , admin]
admin.deleteUser(User1)
console.log(users)
// object literals we use comma to seperate them 
// classes we don't use the comma 


/* =========== CLASS CONSTRUCTOR (under the hood) ==========  */
function UserData(name , rollNo){
    this.name = name;
    this.rollNo = rollNo;
    this.present = false;
//     this.login = function(){
// console.log(this.name, 'is present today ');
    // }

}
/* =========== PROTOTYPE ==========  */
// userData has own prototype which is login and logout 
UserData.prototype.login =function(){
    this.present = true;
console.log(this.name, 'is present today ');

}
UserData.prototype.logout =function(){
    this.present = false;
console.log(this.name, 'is present today ');

}
/* =========== PROTOTYPE INHERTANCE==========  */
// we create a new constructor here and add the we get all the user value but get the 
// admin takes the paramter value in the form of array 
// ...args the array of the name and the roll
function Admin1(...args){
// we need to get the Userdata we use apply and call and two parameter 
// we use in this way like add the arg1,arg2 and get the name and roll no 
    UserData.apply(this, args);
    this.role = 'super admin';

}
// now we want to inherit the prototype so these prototype that is an object 
// so we create a new object for admin prototyope 
Admin1.prototype = Object.create(UserData.prototype)
Admin1.prototype.deleteUserAll = function(u){
    allUsers = allUsers.filter(user =>{
        return user.name != u.name; 
    });
}
var User3 = new UserData('fatima arshad',3815);
var User4 = new UserData( 'noor', 3845);
var admin = new Admin1('kim taehyung', 3854)
var allUsers = [User3, User4, admin]
console.log(admin)
console.log(Admin.login())
/* =========== PROTO TYPE ==========  */
// anything in the proto we can call directly onto the object 
/* every object has a prototype */
// filter through the array and take something out
// of it dependent on the return value 