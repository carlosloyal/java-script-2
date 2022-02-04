let name = document.getElementById('name')
const salary = "1,000.000"; 

let message = alert('for cheking the salary type your name')

name.onclick = function (){
    name = prompt ('type your name')
    alert("hello  " + name + " your salary is $ " + salary);
}

