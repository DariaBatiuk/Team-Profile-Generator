function createHtml(employees) {
let managerHtml = [];
let engineerHtml = [];
let internHtml = [];

	for (i=0; i<employees.length; i++) {
		if (employees[i].getJob() == 'Manager'){
			//createManagerHtml(employees[i]);
			managerHtml.push(createManagerHtml(employees[i]));
		} else if (employees[i].getJob() == 'Engineer'){
			//createManagerHtml(employees[i]);
			engineerHtml.push(createEngineerHtml(employees[i]));
		} else if (employees[i].getJob() == 'Intern'){
			//createManagerHtml(employees[i]);
			internHtml.push(createInternHtml(employees[i]));
		}
	}

  console.log(employees)
return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/style.css">
	<title>Team Profile Generator</title>
</head>
<body>
	<div class="container">
		<nav>My Team</nav>
		<div id="cards">
			${managerHtml.map((htmlSnipet) =>{
				return htmlSnipet;
				
			})}
			${engineerHtml.map((htmlSnipet) =>{
				return htmlSnipet;
				
			})}
			${internHtml.map((htmlSnipet) =>{
				return htmlSnipet;
				
			})}
			</div>
		</div>
	</div>
</body>
</html>`
}

function createManagerHtml (Manager){
	return `<div class="card" style="width: 18rem;">
	<div class="card-body" id="card__header">
		<h5 class="card-title" id="card__header_name">${Manager.name}</h5>
		<h5 class="card-text" id="card__header_role">${Manager.Job}</h5>
	</div>
	<ul class="list-group list-group-flush" id="card__info">
		<li class="list-group-item" id="card__info_id">${Manager.id}</li>
		<li class="list-group-item" id="card__info_email">${Manager.email}</li>
		<li class="list-group-item"id="card__info_number">${Manager.number}</li>
	</ul>
	<div class="card-body">
	</div>
</div>`
}
function createEngineerHtml (Engineer){
	return `<div class="card" style="width: 18rem;">
	<div class="card-body" id="card__header">
		<h5 class="card-title" id="card__header_name">${Engineer.name}</h5>
		<h5 class="card-text" id="card__header_role">${Engineer.Job}</h5>
	</div>
	<ul class="list-group list-group-flush" id="card__info">
		<li class="list-group-item" id="card__info_id">${Engineer.id}</li>
		<li class="list-group-item" id="card__info_email">${Engineer.email}</li>
		<li class="list-group-item"id="card__info_number">${Engineer.githubName}</li>
	</ul>
	<div class="card-body">
	</div>
</div>`
}
function createInternHtml (Intern){
	return `<div class="card" style="width: 18rem;">
	<div class="card-body" id="card__header">
		<h5 class="card-title" id="card__header_name">${Intern.name}</h5>
		<h5 class="card-text" id="card__header_role">${Intern.Job}</h5>
	</div>
	<ul class="list-group list-group-flush" id="card__info">
		<li class="list-group-item" id="card__info_id">${Intern.id}</li>
		<li class="list-group-item" id="card__info_email">${Intern.email}</li>
		<li class="list-group-item"id="card__info_number">${Intern.school}</li>
	</ul>
	<div class="card-body">
	</div>
</div>`
}


module.exports = createHtml;
