


  const EMPLOYEE_ACCOUNT = { username: "employee", password: "12345" }; 

  function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
  
    console.log("Login Attempt:", { username, password, role });
  
    if (role === "employee") {
      const EMPLOYEE_ACCOUNT = { username: "employee", password: "12345" }; 
      if (username === EMPLOYEE_ACCOUNT.username && password === EMPLOYEE_ACCOUNT.password) {
        console.log("Employee login successful");
        window.location.href = "/PAGES/EmployeeOrdersAccess.html";
      } else {
        alert("Invalid employee credentials!");
      }
    } else if (role === "customer") {
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      console.log("Registered Users:", registeredUsers);
  
      const user = registeredUsers.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        console.log("Customer login successful:", user);
        window.location.href = "/PAGES/CustomerOrderPage.html";
      } else {
        alert("Invalid username or password!");
      }
    }
  }
  