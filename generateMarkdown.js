function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## ${data.contents}

## ${data.install}

## ${data.usage}

## ${data.license}

## ${data.contributing}

## ${data.tests}

## ${data.avatar}

## ${data.email}
`;
}

module.exports = { 
  markdown: generateMarkdown // () {
  //   console.log(response.project)
  // }
}
