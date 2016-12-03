'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'projectName',
      message: 'Your project name',
      default: formatProjectName(this.appname) // Default to current-folder-name
    }]).then(function(answers) {
      this.projectName = answers.projectName;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        projectName: this.projectName
      }
    );

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('Specifications/README.md'),
      this.destinationPath('Specifications/README.md'), {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Journal/README.md'),
      this.destinationPath('Journal/README.md'), {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Research/README.md'),
      this.destinationPath('Research/README.md'), {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Task-management/README.md'),
      this.destinationPath('Task-management/README.md'), {
        projectName: this.projectName
      }
    );
    this.fs.copy(
      this.templatePath('Task-management/1-backlog/.gitkeep'),
      this.destinationPath('Task-management/1-backlog/.gitkeep'));
    this.fs.copy(
      this.templatePath('Task-management/2-progress/.gitkeep'),
      this.destinationPath('Task-management/2-progress/.gitkeep'));
    this.fs.copy(
      this.templatePath('Task-management/3-done/.gitkeep'),
      this.destinationPath('Task-management/3-done/.gitkeep'));
    this.fs.copy(
      this.templatePath('Task-management/4-canceled/.gitkeep'),
      this.destinationPath('Task-management/4-canceled/.gitkeep'));

    this.fs.copyTpl(
      this.templatePath('Team/README.md'),
      this.destinationPath('Team/README.md'), {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Test/README.md'),
      this.destinationPath('Test/README.md'), {
        projectName: this.projectName
      }
    );
  }
});

function formatProjectName(projectNameUserInput) {
  var formattedResult = projectNameUserInput;

  // keep all letters in lower case
  let docsPrefixes = ["docs", "documentation"];
  removeDocsPrefixes();
  removeNonLettersSymbolsFromBeginning();
  capitalizeFirstLetter();
  emphasizeProjectNameUserInput();
  return formattedResult;

  function removeDocsPrefixes() {
    let prefixContainedInProjectNameUserInput = prefixContainedIn(projectNameUserInput, docsPrefixes);
    if (prefixContainedInProjectNameUserInput) {
      let startingFromPrefixLength = prefixContainedInProjectNameUserInput.length;
      formattedResult = projectNameUserInput.substr(startingFromPrefixLength);
    }

    function prefixContainedIn(inputString, prefixes) {
      var lowerCasedInputString = inputString.toLowerCase();
      for (var i = 0; i < prefixes.length; i++) {
        let currentPrefix = prefixes[i];
        if (lowerCasedInputString.startsWith(currentPrefix)) {
          return currentPrefix;
        }
        return "";
      }
    }
  }

  function removeNonLettersSymbolsFromBeginning() {
    while (!formattedResult.charAt(0).match("[A-Za-z]")) {
      let throwingFirstCharacter = 1;
      formattedResult = formattedResult.substr(throwingFirstCharacter);
    }
  }

  function capitalizeFirstLetter() {
    let firstLetter = formattedResult.charAt(0);
    formattedResult = firstLetter.toUpperCase() + formattedResult.substr(1);
  }

  function emphasizeProjectNameUserInput() {
    let emphasizingString = "**";
    formattedResult = emphasizingString + formattedResult + emphasizingString;
  }
}