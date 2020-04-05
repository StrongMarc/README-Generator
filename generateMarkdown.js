function generateMarkdown(data) {
  console.log(data.username)
  return `
# ${data.title}

## ${data.description}

## $${data.contents}

## $${data.install}

## $${data.usage}

## $${data.license}

## $${data.contributing}

## $${data.tests}
`;
}

module.exports = { 
  markdown: generateMarkdown // () {
  //   console.log(response.project)
  // }
}
