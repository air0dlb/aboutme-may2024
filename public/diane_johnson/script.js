//var <-- old
//let <--- can be changed
//const <-- cannot be changed

//const myName ="Diane Johnson"' //string
//const myAge = 50; //number
//isStudent = true; //error

//const myObert = {
//color:"blue",
//backgroundColor="green",
//flex: 1
//};
//}
//const myHobbies = ["coding", "reading"]; //array
//myHobbies.push ("swim");



const clickMeButtonElement=window.document.querySelector("#click-me-button");

if (clickMeButtonElement){
    clickMeButtonElement.addEventListener("click",function() {
        window.alert("You clicked me!");
    } );
}