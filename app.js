const form = document.querySelector("form");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const expenseList = document.getElementById("expense-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredAmount = amount.value;
  const enteredDescription = description.value;
  const selectedCategory = category.value;

  if (enteredAmount === "" || enteredDescription === "") {
    alert("Please fill all the fields");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = `${enteredAmount} - ${selectedCategory} - ${enteredDescription} `;

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm ms-2";

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-warning btn-sm ms-2";

  // Delete functionality
  deleteBtn.addEventListener("click", function () {
    expenseList.removeChild(li);
  });

  // Edit functionality
  editBtn.addEventListener("click", function () {
    amount.value = enteredAmount;
    description.value = enteredDescription;
    category.value = selectedCategory;

    expenseList.removeChild(li);
  });

  // Append buttons to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to ul
  expenseList.appendChild(li);

  // Clear form
  amount.value = "";
  description.value = "";
  category.value = "Fuel";
});
