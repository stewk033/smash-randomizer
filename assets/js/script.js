/* Javascript for Mario Kart Randomizer App
Two seperate APIs will be added
https://github.com/samyvera/mk8_node_api
& TBD
Pseudocode Below */

// Mario Kart API
fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario', {
	method: "GET",
	headers: {"Content-type": "application/json;charset=UTF-8", "authorization": "Bearer YOUR_BEARER"}
})
 .then(response => response.json()) 
 .then(json => console.log(json));

 // Mario Kart Playlist Search API / Spotify - IN PROGRESS
 fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music", {
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "69b564f0f1mshb07fa8261424345p1ad4fbjsn87bfd14a7d5e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// Show current date at top of page
var currentdate = new Date();
var dd = String(currentdate.getDate()).padStart(2, "0");
var mm = String(currentdate.getMonth() + 1).padStart(2, "0");
var yyyy = currentdate.getFullYear();

currentdate = mm + "/" + dd + "/" + yyyy;
console.log(currentdate);

 fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music", {
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "69b564f0f1mshb07fa8261424345p1ad4fbjsn87bfd14a7d5e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// Show current date at top of page
var currentdate = new Date();
var dd = String(currentdate.getDate()).padStart(2, "0");
var mm = String(currentdate.getMonth() + 1).padStart(2, "0");
var yyyy = currentdate.getFullYear();

currentdate = mm + "/" + dd + "/" + yyyy;
console.log(currentdate);


// define variables in accordance with the html file

// if nothing is in localStorage, assign random character/car/course combination
// Place Code Here

window.localStorage.setItem('name', 'user');

const person = {
    name: 'user',
}

window.localStorage.setItem('user', JSON.stringify(person));

// if there is a favorited character/car/course combination in localStorage, have that appear when user loads page
// Place Code Here

// random Mario Kart playlist rom Spotify
var playlistSearch = document.querySelector(".playlistSearch")

playlistSearch.addEventListener('click', function() {

    fetch ('https://api.spotify.com/v1/search?q=mario%20kart&type=playlist')
    .then(response => response.json())
    .then(data => {
        var num = Math.floor(Math.random() * data.length)
        var random = data[num]['name']

    playlist.innerHTML = random

    })
})

    fetch ('https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music')
    .then(response => response.json())
    // .then(data => {
        // var num = Math.floor(Math.random() * data.length)
        // // var random = data[num]['name']

    // playlist.innerHTML = random

    



// Enable buttons from Bulma to be used:
// Buttons for "generate combination" & a button for "start over/clear"
// Place Code Here

// Link APIs and Bulma library here - make sure to list BASE libraries first so that the additional ones will work

// Buttons can be found here: https://bulma.io/documentation/elements/button/
// Cards can be found here (could be used for where the character appears?): https://bulma.io/documentation/components/card/
// Columns can be found here (could be used for 4 player spots on app): https://bulma.io/documentation/columns/basics/

// Generate a random character when the user clicks on the Generate button
// Place Code Here

// If the user is not happy with the generated character, allow them to re-click the button to run the function again
//Place Code Here

// Generate a random course when the user clicks on the Generate button
// Place Code Here

// If the user wishes to clear stored data, they press the "clear" button
window.localStorage.clear(); 





var randomDriver = document.querySelector(".randomDriver")
var listOfDrivers = document.querySelector(".listOfDrivers")
var showList = document.querySelector(".showList")
var listOfCourses = document.querySelector(".listOfCourses")
var randomCourse = document.querySelector(".randomCourse")
var saveDriver = document.querySelector(".saveDriver")
var saveCourse = document.querySelector(".saveCourse")




var apiSearch = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
        .then(response => response.json())
}


// list of all drivers function
var listOfDriversApi = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
    .then(response => response.json()) 
    .then(data => {
        
        for (let i= 0; i< data.length; i++) {
            var driverName = data[i]['name']
            var list = document.createElement('li')
            var list = document.createElement('button')
            list.textContent = driverName
            showList.appendChild(list)
           
            console.log(driverName)
        }
    })
}

// list of all drivers event listener
listOfDrivers.addEventListener('click', function(){
    listOfDriversApi();
        
})



var driversList = []; 
// random drivers function
var randomDriverApi = function(){
    var random;
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
        .then(response => response.json()) 
        .then(data => {
            var num = Math.floor(Math.random() * data.length)
            random = data[num]['name']
            console.log(random)
            randomDriver.innerHTML= random
            driversList.push(random);
            console.log(driversList);


        //     saveDriver.addEventListener('click', function(){
        //         localStorage.setItem('driver', random)
        //         var saved = localStorage.getItem('driver')
        //         console.log(saved)

        //         var list = document.createElement('li')
        //         list.textContent = random
        //         showList.appendChild(list)

           
        // })
        })


    // save characters
    

return random;
}

// random all drivers event listener
randomDriver.addEventListener('click', function(){
    randomDriverApi();  
})


// save random driver
saveDriver.addEventListener('click', function(){
        
        localStorage.setItem('driver', JSON.stringify(driversList))


            var saved = JSON.parse(localStorage.getItem('driver'))
            // var saving = JSON.parse(saved)
            // console.log(saving)

    
        var list = document.createElement('li')
        list.textContent = driversList
        showList.appendChild(list)
 
})




// list of all the courses function
var listOfCoursesApi = function(){

    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
        
    .then(response => response.json() 
    .then(data => {

        for (let i= 0; i< data.length; i++) {
            kartName = data[i]['name']
            var listKart = document.createElement('li')
            listKart.textContent = kartName
            showList.appendChild(listKart)
           
            console.log(kartName)
        }
    
    }))
}

// list of courses event listener
listOfCourses.addEventListener('click', function(){
    listOfCoursesApi();
})



var courseList = [];
// random course function
var randomCourseApi = function(){
    var random;
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
    .then(response => response.json()) 
    .then(data => {
        var num = Math.floor(Math.random() * data.length)
        random = data[num]['name']
        console.log(random)
        randomCourse.innerHTML= random
        courseList.push(random);
        console.log(courseList);


    })
    return random;
}

// random course event listener
randomCourse.addEventListener('click', function(){
    randomCourseApi()
})

// recent courses event listener
saveCourse.addEventListener('click', function(){
        
    localStorage.setItem('course', JSON.stringify(courseList))


        var saved = JSON.parse(localStorage.getItem('course'))
        // var saving = JSON.parse(saved)
        // console.log(saving)


    var list = document.createElement('li')
    list.textContent = courseList
    showList.appendChild(list)

    if (list>5){
        

    }

})





// Defines 
// var random = localStorage.getItem("key");
// console.log("random");

// // Stores the Information
// localStorage.setItem("random", randomDriver.addEventListener);
// console.log("localStorage.setItem");
// // Retrieves the Information
// document.getElementById = localStorage.getItem("random");
// console.log("localStorage.getItem");

// let searchHistory = JSON.parse(localStorage.getItem("random"))

// // Check browser support
// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("random", "randomDriver");
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem("random");
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }

// var charSaved = JSON.parse(localStorage.getItem('city')) || []

// var charSaved = document.querySelector('#email').value;


// localStorage.setItem('email', email);

// localStorage.setItem('char', JSON.stringify(citySaved))



