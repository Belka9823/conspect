const users = [
{
id: 1,
name: "Иванов",   
age: 20    
},

{
id: 2,
name: "Петров",   
age: 25    
},

{
id: 3,
name: "Сидоров",   
age: 30    
}
]


const tbody = document.getElementById("tbody");

const tabl = users.map(user => 
    `
    <tr>
    <td>${user.id}</td>
    <td>${user.name}</td> 
    <td>${user.age}</td> 
    </tr>
    `
).join('');

tbody.innerHTML = tabl