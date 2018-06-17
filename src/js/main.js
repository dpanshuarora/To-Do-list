let tasksSection = document.getElementById('tasks-section');

addButton = document.getElementById('add-task-button');
addButton.addEventListener('click', onButtonClick = () => {

  let textBox = document.getElementById('new-task');
  let textBoxValue = textBox.value;
  textBox.value = "";

  let task = createNewTask(textBoxValue);

  let checkBox = createCheckBox(textBoxValue);
  task.appendChild(checkBox);

  let checkBoxLabel = createCheckBoxLabel(textBoxValue);
  task.appendChild(checkBoxLabel);

  let deleteButton = createDeleteButton(textBoxValue);
  task.appendChild(deleteButton);

  tasksSection.insertBefore(task, tasksSection.firstChild);
  updateCount();
});

const createNewTask = (id) => {
  let task = document.createElement("div");
  task.id = id;
  task.classList.add('tasks');
  return task;
};

const createDeleteButton = (id) => {
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener('click', deleteTask = () => {
    document.getElementById(id).remove();
    updateCount();

  });
  return deleteButton;
};

const createCheckBox = (id) => {
  let checkBox = document.createElement("input");
  checkBox.type = 'checkbox';
  checkBox.class = 'all-tasks';
  checkBox.addEventListener('change', () => {
    updateCount();
    if(!this.checked) {
      console.log(this);
      tasksSection.appendChild(document.getElementById(id));
    }
  });
  return checkBox;
};

const createCheckBoxLabel = (label) => {
  let checkBoxLabel = document.createElement("label");
  checkBoxLabel.innerHTML = label;
  checkBoxLabel.classList.add('strikethrough');
  return checkBoxLabel;
};

const updateCount = () => {
  const activeLabel = document.getElementById('active-tasks');
  const inactiveLabel = document.getElementById('inactive-tasks');
  activeLabel.innerHTML = document.querySelectorAll('input[type="checkbox"]:checked').length + " Completed";
  inactiveLabel.innerHTML = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length + " Active";
};
