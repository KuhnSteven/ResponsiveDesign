// JavaScript file intended to create full file paths
// to be utilized with a Library API

// Targeting specific objects from the DOM
const form = document.querySelector("#form");
const input = document.querySelector("#search");
const results = document.querySelector("#results");
let content = '';

form.addEventListener("submit", e => {
    e.preventDefault();
    // Code line for outputting written user value to console
    //	  console.log(value);

    // Create url-path for API
    const query = input.value;
    const url = `http://openlibrary.org/search.json?q=${query}`;

    // DEBUGGING URL
    //const url = 'http://openlibrary.org/search.json?q=Iron-Man';

    // FETCH base + query
    fetch(url)
        .then(data => data.json())
        // Code line used for testing in console
        //	  .then(data => console.log(data))
        .then(data => displayPage(data))
        .catch(error => console.log('Error Report:', error));
})


// Build results
function displayPage(data) {
    data.docs.forEach(book => {
        content +=
            `<article id="result" onclick="saveData(${book.title})"> 
			<h1>Book Title: ${book.title}</h1>
			<h1>Author: ${book.author_name}</h1>
			<h2>Year Published: ${book.first_publish_year}</h2>
			<h2>Language(s): ${book.language}</h2>
			</article>`;
    });
    // Additional information with pre-filled in array names.
    //			<h2>Gengre(s): ${book.subject}</h2>
    //			<h2>Characters: ${book.person}</h2>
    //			<h2>Locations: ${book.place}</h2>

    // Populate the DOM
    results.innerHTML = content;

}

// Localstorage function
function saveData(bTitle)
{
    localStorage.setItem('Title', bTitle);
    const nominal = localStorage.getItem('Title');
    console.log(nominal);
}