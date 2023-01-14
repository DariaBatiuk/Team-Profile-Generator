function createHtml({ username, email, project, description, license, command, test, usage, githubLink }) {
  return `#${project} 
## Description
${description}

## Table of Contents

A table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
What are command to run the project ? 
${command}

## Usage
${usage}
This app is used for generating professional read.me file. Include screenshots as needed.

## License
${renderLicenseBadge(license)}

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Command that can be used to test this app: ${test}

## Questions

More information about this project you can find on my Github account: ${username}
Github link: ${githubLink}
Also you can reach me via email ${email}

`;
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
			<div class="card" style="width: 18rem;">
				<div class="card-body" id="card__header">
					<h5 class="card-title" id="card__header_name">Name</h5>
					<h5 class="card-text" id="card__header_role">Icon + Role.</h5>
				</div>
				<ul class="list-group list-group-flush" id="card__info">
					<li class="list-group-item" id="card__info_id">ID</li>
					<li class="list-group-item" id="card__info_email">Email</li>
					<li class="list-group-item"id="card__info_number">Office number</li>
				</ul>
				<div class="card-body">
				</div>
			</div>
		</div>
	</div>
</body>
</html>`
}

module.exports = createHtml;
