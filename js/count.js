const countElement = document.getElementById("count");

let count = 10;
const endCount = 500;
const totalTime = 1000; // total time in milliseconds
const updateInterval = totalTime / (endCount - count); // calculate the interval between updates

function updateCount() {
  countElement.textContent = count;
  count++;

  if (count <= endCount) {
    setTimeout(updateCount, updateInterval);
  }
}

const countProjects = document.getElementById("projects");

const endProjects = 800;
const intervalProject = totalTime / (endProjects - count); // calculate the interval between updates

function updateProject() {
  countProjects.textContent = count;
  count++;

  if (count <= endProjects) {
    setTimeout(updateProject, intervalProject);
  }
}

updateCount();
updateProject();
