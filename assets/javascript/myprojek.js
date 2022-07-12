let projects = [];

function addProject(event) {
  event.preventDefault();

  let name = document.getElementById("input-myprojek-name").value;
  let startdate = document.getElementById("input-myprojek-date-start").value;
  let enddate = document.getElementById("input-myprojek-date-end").value;
  let description = document.getElementById("input-myprojek-description").value;
  let tech = document.getElementsByName("tech").checked;
  let image = document.getElementById("input-myprojek-image");

  image = URL.createObjectURL(image.files[0]);

  const dateStart = new Date(startdate);
  const dateEnd = new Date(enddate);
  const time = Math.abs(dateEnd - dateStart);
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  const week = Math.ceil(days / 7);
  const month = Math.ceil(week / 4); // Math.ceil(days / 30)

  let project = { name, startdate, enddate, description, tech, image, month };

  projects.push(project);

  console.log(projects);

  renderProjek();
}

function renderProjek() {
  let containerProjek = document.getElementById("new-projek");
  containerProjek.innerHTML = fristProjekContent();

  for (let i = 0; i < projects.length; i++) {
    containerProjek.innerHTML += `
        <div class="projek-card">
        <img src=${projects[i].image} alt="my-project">
        <h3>${projects[i].name}</h3>
        <p class="projek-date">Durasi: ${projects[i].month} bulan</p>
        <p class="projek-desc">${projects[i].description}</p>
        <div class="projek-card-icon">
        <i class="fa-brands fa-node-js"></i>
        <i class="fa-brands fa-react"></i>
        </div>
        <div class="projek-card-button">
            <button class="projek-button-edit">edit</button>
            <button class="projek-button-delete">delete</button>
        </div>
        </div>
        `;
  }
}

function fristProjekContent() {
  return `
    <div class="projek-card">
        <img src="https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="my-project">
        <h3>Dumbways Mobile App - 2021</h3>
        <p class="projek-date">Durasi: 3 bulan</p>
        <p class="projek-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, maxime?</p>
        <div class="projek-card-icon">
            <i class="fa-brands fa-node-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-solid fa-code"></i>
        </div>
        <div class="projek-card-button">
            <button class="projek-button-edit">edit</button>
            <button class="projek-button-delete">delete</button>
        </div>
    </div>
    `;
}
