// Login handler for employee and customer
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  console.log("Login Attempt:", { username, password, role });

  if (role === "employee") {
      if (username === "employee" && password === "employee123") { // Change this to actual employee credentials
          console.log("Employee login successful");
          window.location.href = "EmployeeOrdersAccess.html"; // Employee dashboard
      } else {
          alert("Invalid employee credentials!");
      }
  } else if (role === "customer") {
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      console.log("Registered Users:", registeredUsers);

      const user = registeredUsers.find(
          (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
      );

      if (user) {
          console.log("Customer login successful:", user);
          window.location.href = "CustomerOrderPage.html"; // Customer order page
      } else {
          alert("Invalid username or password!");
      }
  }
}

// Handling order submission
function submitOrder() {
  const product = document.getElementById("product").value;
  const price = document.getElementById("price").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (!name || !address || !paymentMethod) {
      alert("Please fill in all fields!");
      return;
  }

  const order = {
      product,
      price,
      name,
      address,
      paymentMethod,
      status: "Pending"
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  console.log("Order placed successfully:", order);

  alert(`Order placed successfully!\nProduct: ${product}\nPrice: ${price}\nName: ${name}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);

  const modal = bootstrap.Modal.getInstance(document.getElementById("buyModal"));
  modal.hide();
}
