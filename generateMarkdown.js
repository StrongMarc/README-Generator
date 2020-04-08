function generateMarkdown(data) {
  // return string for README markdown
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
![License](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)

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

// modularization module.exports
module.exports = { 
  markdown: generateMarkdown 
}
