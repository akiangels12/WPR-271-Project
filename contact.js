//create a function 
function contactForm(){
    let FirstName = document.getElementById('Firstame').value;
    let LastName = document.getElementById('LastName').value;
    let Email = document.getElementById('Email').value;
    let Phone = document.getElementById('Phone').value;

    alert(`Hello + ${FirstName} + ${LastName} + ${Email} + ${Phone}:`);

}
contactForm()