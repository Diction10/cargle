console.log('Hello');

// script to toggle to dark mode
function dark_mode() {
    // change the body to dark mode
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    // get the ppty of the checkbox
    var btn = document.querySelector('.dark_mode')
    
    // set the state of the check box to local storage
    localStorage.setItem('checked_status', btn.checked)
 }
 

