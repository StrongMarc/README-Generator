function generateMarkdown(data) {
  return `
# ${data.title}

## Description:
${data.description}

## Table of Contents:

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation: 
${data.install}

## Usage:
${data.usage}

## License:
${data.license}

## Contributing:
${data.contributing}

## Tests:
${data.tests}

## Questions:
<img src= "${data.avatar}" alt = "user image" style = "width: 100px" height = "100px" />

 ${data.email}
`;
}

module.exports = { 
  markdown: generateMarkdown 
}
