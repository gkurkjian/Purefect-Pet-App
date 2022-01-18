/********************************************************************************* 
*
* WEB222 – Assignment #4
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: George Kurkjian  Student ID: 137555207 Date: Nov 21-2021 
* 
********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters() {
    let main_node = document.querySelector('#main-table-body');  // calling the main-table-body with its id # and will dynamically create the pics and desc in it.
    main_node.innerHTML='';  // set to null to not repeat the same process again.

    // the first loop for checking the input & age & type and so on so forth.
    for(let i = 0; i < petData.length; i++) {  // we're fetching from the petData.js

        // the first if statement to check the type of of pet or whole pet in general
        if ((filterType === 'dog' && petData[i].type === 'dog') ||
            (filterType === 'cat' && petData[i].type === 'cat') ||
            (filterType === 'bird' && petData[i].type === 'bird') ||
            (filterType === '')) {

                // the second if statement to check the ages and start processing the table row and its data.
                if ((petData[i].age <= filterAgeMax) &&  // the process of checking the Max and Min of the age.
                    (petData[i].age >= filterAgeMin)) {

                        // all these process it's creating dynamically at run time.
                        let tr = document.createElement('tr');  // var tr to createElement <tr> which is will have 2 sections in it. td_image td_description


                        // here we're creating the first section the table row and table data to insert the image and specify the img, alt, width and height
                        let td_image = document.createElement('td');  // the table data it's image
                        let img = document.createElement('img');  // var img to createElement image
                        img.src = petData[i].image.src;  // setting the var img to source in the petData's src
                        img.alt = petData[i].image.alt;  // setting the var alt into source in the petData's alt
                        img.width = petData[i].image.width;  // same here for the width
                        img.height = petData[i].image.height;  // same here for the height
                        td_image.appendChild(img);             // we're appendingChild from the img into the td_image.


                        // here we're creating the second table data which is the second section of td_description 
                        let td_description = document.createElement('td');  // var td_description createElement <td>
                        let h4 = document.createElement('h4');   // var h4 to createElement empty element <h4>
                        let pet_name = document.createTextNode(petData[i].name);  // var pet_name set to createTextNode from petData[i].name.
                        h4.appendChild(pet_name);           // inserting from pet_name into the empty <h4>
                        let p = document.createElement('p');  // var p to createElement <p> paragraph
                        p.innerHTML = petData[i].description;  // the p.innerHTML is set to petData[i].description to fetch the value from the document.  
                        let span = document.createElement('span');  // var span it's set to createElement <span>
                        let text_age = document.createTextNode('Age: ');  // var text_age it's set to creteTextNode to display us a 'Age: '
                        let age = document.createTextNode(petData[i].age);  // var age createTextNode from age from the petData to fetch the age number
                        let text_year = document.createTextNode(' years old.');  // var text_year to show ' years old.' after display the 'Age: ..'
                        
                        span.appendChild(text_age);  // the <span> it's appending child from the text age
                        span.appendChild(age);       // the age number
                        span.appendChild(text_year);  // and the ' years old.' after the 'Age: ', age number.

                        td_description.appendChild(h4);  // appending child into the td_description from the <h4>
                        td_description.appendChild(p);   // the paragraph
                        td_description.appendChild(span);  // and the info from the <span>

                        tr.appendChild(td_image);   // appending the td_image into the tr
                        tr.appendChild(td_description);    // appending child the td_description

                        main_node.appendChild(tr);  // while the <tr> and it's all information we're appendingChild into the ver main main_node.
                    };
            };
    };
};



// When it loads
window.onload = function() {  
    loadTableWithFilters();
};

// To display only the dogs
function filterDog() {
    filterType = 'dog';
    loadTableWithFilters();
};

// To display the cats
function filterCat() {
    filterType = 'cat';
    loadTableWithFilters();
};

// To display the birds
function filterBird() {
    filterType = 'bird';
    loadTableWithFilters();
};

// To filter age from zero to 1
function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
};

// To filter age from 1 up to 3
function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
};

// To filter all pets
function filterAllPets() {
    filterType = '';
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
};