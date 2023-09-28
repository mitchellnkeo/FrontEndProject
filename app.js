// Testing the jQuery $get method and successfully returning data from an external source.

$.get("https://covid-19.dataflowkit.com/v1", (data) => {
    console.log(data)
    console.log(data[1])
    console.log(data[1]["Country_text"]  
    )
})


/* Hiding the inital popup boxes. */
$(".hide").hide()

/* 

Functions for each country's covid stats. Refactor to optimize code.

Consider the following:
    - You can keep the const statements, as those need to be created.
    - The $get statement still stands to retrieve external data.
    - You would have to look closely at the data[] lines of code as those need to be optimized.
    - Perhaps you can do a for loop that matches the country labels in your code with the dataset provided.
    - For example - in the dataset, it looks like countries are marked with data[Loop Variable]["Country_text"]
    - Perhaps you can take this ["Country_text"] and convert it using toLowercase() and -txt in order to find a match
        for a class within your html file that matches that.
    - All country div tags within your html code have the class="country-txt" format
    - Create a variable by querySelecting all classes within the .country-texts div class
        - The reason for this is because all the country div tags are within the .country-texts div
    - Loop through the html items and if they match with the variable you created for the dataset's ["Country_text"] conversion,
        initiate the textContent process.
    - Once you have your textContent items completed, querySelect the html item's class (".country-txt") in the document
      and create a variable from it.
    - Append the new textContent items to the html item's class variable you created above.
    - MAYBE return it.

*/

function canadaStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[33]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[33]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[33]["Total Recovered_text"]
})
let canadaClass = document.querySelector(".canada-txt")
canadaClass.append(totalCases)
canadaClass.append(totalDeaths)
canadaClass.append(totalRecovered)
                    }
canadaStats()

function usaStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[1]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[1]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[1]["Total Recovered_text"]
})
let usaClass = document.querySelector(".usa-txt")
usaClass.append(totalCases)
usaClass.append(totalDeaths)
usaClass.append(totalRecovered)
                    }
usaStats()

function mexicoStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[18]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[18]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[18]["Total Recovered_text"]
})
let mexicoClass = document.querySelector(".mexico-txt")
mexicoClass.append(totalCases)
mexicoClass.append(totalDeaths)
mexicoClass.append(totalRecovered)
                    }
mexicoStats()

function brazilStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[5]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[5]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[5]["Total Recovered_text"]
})
let brazilClass = document.querySelector(".brazil-txt")
brazilClass.append(totalCases)
brazilClass.append(totalDeaths)
brazilClass.append(totalRecovered)
                    }
brazilStats()

function ukStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[9]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[9]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[9]["Total Recovered_text"]
})
let ukClass = document.querySelector(".uk-txt")
ukClass.append(totalCases)
ukClass.append(totalDeaths)
ukClass.append(totalRecovered)
                    }
ukStats()

function nigerStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[108]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[108]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[108]["Total Recovered_text"]
})
let nigerClass = document.querySelector(".niger-txt")
nigerClass.append(totalCases)
nigerClass.append(totalDeaths)
nigerClass.append(totalRecovered)
                    }
nigerStats()

function italyStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[8]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[8]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[8]["Total Recovered_text"]
})
let italyClass = document.querySelector(".italy-txt")
italyClass.append(totalCases)
italyClass.append(totalDeaths)
italyClass.append(totalRecovered)
                    }
italyStats()

function russiaStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[10]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[10]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[10]["Total Recovered_text"]
})
let russiaClass = document.querySelector(".russia-txt")
russiaClass.append(totalCases)
russiaClass.append(totalDeaths)
russiaClass.append(totalRecovered)
                    }
russiaStats()

function southkoreaStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[6]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[6]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[6]["Total Recovered_text"]
})
let southkoreaClass = document.querySelector(".southkorea-txt")
southkoreaClass.append(totalCases)
southkoreaClass.append(totalDeaths)
southkoreaClass.append(totalRecovered)
                    }
southkoreaStats()

function japanStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[7]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[7]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[7]["Total Recovered_text"]
})
let japanClass = document.querySelector(".japan-txt")
japanClass.append(totalCases)
japanClass.append(totalDeaths)
japanClass.append(totalRecovered)
                    }
japanStats()

function australiaStats(){
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1", (data) => {
        totalCases.textContent = `Total Cases: ` + data[13]["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data[13]["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data[13]["Total Recovered_text"]
})
let australiaClass = document.querySelector(".australia-txt")
australiaClass.append(totalCases)
australiaClass.append(totalDeaths)
australiaClass.append(totalRecovered)
                    }
australiaStats()

function worldStats(){
    const activeCases = document.createElement("p")
    const lastUpdate = document.createElement("p")
    const newCases = document.createElement("p")
    const newDeaths = document.createElement("p")
    const totalCases = document.createElement("p")
    const totalDeaths = document.createElement("p")
    const totalRecovered = document.createElement("p")
    $.get("https://covid-19.dataflowkit.com/v1/world", (data) => {
        activeCases.textContent = `Total Cases: ` + data["Active Cases_text"]
        lastUpdate.textContent = `Last Update: ` + data["Last Update"]
        newCases.textContent = `New Cases: ` + data["New Cases_text"]
        newDeaths.textContent = `New Deaths: ` + data["New Deaths_text"]
        totalCases.textContent = `Total Cases: ` + data["Total Cases_text"]
        totalDeaths.textContent = `Total Deaths: ` + data["Total Deaths_text"]
        totalRecovered.textContent = `Total Recovered: ` + data["Total Recovered_text"]
})
let worldClass = document.querySelector(".world-txt")
worldClass.append(activeCases)
worldClass.append(lastUpdate)
worldClass.append(newCases)
worldClass.append(newDeaths)
worldClass.append(totalCases)
worldClass.append(totalDeaths)
worldClass.append(totalRecovered)
                    }
worldStats()



/* 
1. Canada -- > data[33]
2. USA --> data[1]
3. Mexico -- > data[18]
4. Brazil --> data[5]
5. UK -- > data[9]
6. Italy -- > data[8]
7. Niger --> data[108]
8. Russia -- > data[10]
9. South Korea -- > data[6]
10. Japan -- > data[7]
11. Australia -- > data[13]
*/

// Box Stats
// Last Update:
// Total Cases:
// Total Deaths:
// Total Recovered:

// Container for world COVID stats

// const container = document.createElement("container")
// document.body.append(container)

// function boxStats(){
//     $.get("https://covid-19.dataflowkit.com/v1", (data) => {
//         for (let country in data){
//             let countryclassName = country.toLowerCase() + `-txt`
//             let countryElements = document.getElementsByClassName(countryclassName)
//             for (let i = 0; i < countryElements.length; i++) {
//                 countryElements[i].textContent = `Total Cases: ` + data[country]["Total Cases_text"]
                    
//             }

            
//         }
//     })
// }

// boxStats()

// let testCountry = document.getElementsByClassName("usa-txt")
// let testCountryParagraphs = testCountry.querySelector("p")
// console.log(testCountryPararaphs)

// console.log(data[country]["Total Cases_text"])
// console.log(data[country]["Total Deaths_text"])
// console.log(data[country]["Total Recovered_text"])

// Toggle functions for all the countries.

/* Event listener functions for the country text boxes.
   What if I created a single catch all function?
   1) I would create a variable for all the country ELEMENTS captured via querySelector.
   2) I would create a variable using .toLowercase() + "-txt" in conjunction with grabbing the class with querySelector.
      I may not even have to use toLowercase() and "-txt" at all. Test these out.

      Example of jQuery combining mouseenter and mouseleave:
      $(document).on({
        mouseenter: function () {
          mouse_is_inside = true;
            },

        mouseleave: function () {
          mouse_is_inside = false;
            }
       }, '.my-elements');
*/

$("#Canada").mouseenter(function(){
    $(".canada-txt").toggle();
})

$("#Canada").mouseleave(function(){
    $(".canada-txt").toggle();
})

$("#USA").mouseenter(function(){
    $(".usa-txt").toggle();
})

$("#USA").mouseleave(function(){
    $(".usa-txt").toggle();
})

$("#Mexico").mouseenter(function(){
    $(".mexico-txt").toggle();
})

$("#Mexico").mouseleave(function(){
    $(".mexico-txt").toggle();
})

$("#Brazil").mouseenter(function(){
    $(".brazil-txt").toggle();
})

$("#Brazil").mouseleave(function(){
    $(".brazil-txt").toggle();
})

$("#UK").mouseenter(function(){
    $(".uk-txt").toggle();
})

$("#UK").mouseleave(function(){
    $(".uk-txt").toggle();
})

$("#Niger").mouseenter(function(){
    $(".niger-txt").toggle();
})

$("#Niger").mouseleave(function(){
    $(".niger-txt").toggle();
})

$("#Italy").mouseenter(function(){
    $(".italy-txt").toggle();
})

$("#Italy").mouseleave(function(){
    $(".italy-txt").toggle();
})

$("#Russia").mouseenter(function(){
    $(".russia-txt").toggle();
})

$("#Russia").mouseleave(function(){
    $(".russia-txt").toggle();
})

$("#SouthKorea").mouseenter(function(){
    $(".southkorea-txt").toggle();
})

$("#SouthKorea").mouseleave(function(){
    $(".southkorea-txt").toggle();
})

$("#Japan").mouseenter(function(){
    $(".japan-txt").toggle();
})

$("#Japan").mouseleave(function(){
    $(".japan-txt").toggle();
})

$("#Australia").mouseenter(function(){
    $(".australia-txt").toggle();
})

$("#Australia").mouseleave(function(){
    $(".australia-txt").toggle();
})
