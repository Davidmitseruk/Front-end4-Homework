const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function renderTasks() {
  
    taskList.innerHTML = '';
    
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task');
        
      
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        
     
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
        });

      
        const span = document.createElement('span');
        span.textContent = task.text;

       
        li.appendChild(checkbox);
        li.appendChild(span);
       
        taskList.appendChild(li);
    });
}


function saveTasks() {
    const tasks = [];
    const taskItems = taskList.querySelectorAll('.task');
    taskItems.forEach((taskItem, index) => {
        const text = taskItem.querySelector('span').textContent;
        const completed = taskItem.querySelector('input').checked;
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
   
    const taskText = taskInput.value.trim();
    if (taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        taskInput.value = ''; 
        renderTasks();  
    }
});


renderTasks();


// 2
const form = document.getElementById('myForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        function saveData() {
            const data = {
                name: nameInput.value,
                email: emailInput.value
            };
            localStorage.setItem('formData', JSON.stringify(data));
        }

     
        function loadData() {
            const savedData = localStorage.getItem('formData');
            if (savedData) {
                const data = JSON.parse(savedData);
                nameInput.value = data.name;
                emailInput.value = data.email;
            }
        }

       
        loadData();

        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            saveData(); 
        });

// 3

const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const welcomeMessage = document.getElementById('welcomeMessage');
        const userNameDisplay = document.getElementById('userNameDisplay');

    
        function saveUser(username, password) {
            const user = {
                username: username,
                password: password
            };
            localStorage.setItem('user', JSON.stringify(user));
        }

        
        function checkUserLogin(username, password) {
            const savedUser = JSON.parse(localStorage.getItem('user'));
            return savedUser && savedUser.username === username && savedUser.password === password;
        }

        
        if (localStorage.getItem('user')) {
            const savedUser = JSON.parse(localStorage.getItem('user'));
            welcomeMessage.style.display = 'block';
            userNameDisplay.textContent = savedUser.username;
            loginForm.style.display = 'none';
        }

        
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (checkUserLogin(username, password)) {
                welcomeMessage.style.display = 'block';
                userNameDisplay.textContent = username;
                loginForm.style.display = 'none';
            } else {
                alert('Невірний логін або пароль!');
            }
        });

        
        if (!localStorage.getItem('user')) {
            saveUser('user123', 'password123');
        }

        // 4

        
let users = JSON.parse(localStorage.getItem('users')) || [];

function renderTable() {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML= '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <button onclick="editUser(${index})">Edit</button>
            <button onclick="deleteUser(${index})">Delete</button>
         </td>
        `;
        tableBody.appendChild(row);
    })
}

function addUser(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (firstName && lastName && email && phone){
        const user = {firstName, lastName, email, phone};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert("Please fill all the textboxes!")
    }
}

function editUser(index) {
    const user = users[index];
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;

    deleteUser(index);

}

function deleteUser(index) {
    users.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
}
renderTable();