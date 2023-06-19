// Consigne B
const addTaskBtn = document.querySelector("#add-task");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskListDone = document.querySelector("#task-list-done");
const removeAllTaskBtn = document.querySelector("#remove-all-task");
const addAllDoneBtn = document.querySelector("#add-all-done");

addTaskBtn.addEventListener("click", function () {
  if (taskInput.value !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

removeAllTaskBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
  taskListDone.innerHTML = "";
});

addAllDoneBtn.addEventListener("click", function () {
  const taskItems = taskList.querySelectorAll("li");
  taskItems.forEach(function (item) {
    taskListDone.appendChild(item);
  });
});

// Consigne C
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordDiv = document.querySelector(
  "#generated-password"
);
const passwordLengthInput = document.querySelector("#password-length");
const includeNumbersCheckbox = document.querySelector("#include-numbers");
const includeSpecialCharactersCheckbox = document.querySelector(
  "#include-special-characters"
);

function generatePassword(
  length,
  includeNumbers,
  includeSpecialCharacters
) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let password = "";
  if (includeNumbers) {
    characters += "0123456789";
  }
  if (includeSpecialCharacters) {
    characters += "!@#$%^&*()-_=+[]{}|;:,.<>?";
  }
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

generatePasswordBtn.addEventListener("click", function () {
  const passwordLength = passwordLengthInput.value;
  const includeNumbers = includeNumbersCheckbox.checked;
  const includeSpecialCharacters =
    includeSpecialCharactersCheckbox.checked;
  const password = generatePassword(
    passwordLength,
    includeNumbers,
    includeSpecialCharacters
  );
  generatedPasswordDiv.textContent = password;
});
