'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  debug: function () {
    console.log('method 1 just ran');
  },

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'projectName',
      message : 'Your project name',
      default : this.appname // Default to current_folder_name
    }]).then(function (answers) {
      this.projectName = answers.projectName;
    }.bind(this));
  },

  writing: function () {
    console.log("projectName is: " + this.projectName);
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        projectName: this.projectName
      }
    );

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('Design/README.md'),
      this.destinationPath('Design/README.md'),
      {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Journal/README.md'),
      this.destinationPath('Journal/README.md'),
      {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Research/README.md'),
      this.destinationPath('Research/README.md'),
      {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Task-management/README.md'),
      this.destinationPath('Task-management/README.md'),
      {
        projectName: this.projectName
      }
    );
    this.fs.copy(
      this.templatePath('Task-management/1. backlog/.gitkeep'),
      this.destinationPath('Task-management/1. backlog/.gitkeep'));
    this.fs.copy(
      this.templatePath('Task-management/2. progress/.gitkeep'),
      this.destinationPath('Task-management/2. progress/.gitkeep'));
    this.fs.copy(
      this.templatePath('Task-management/3. done/.gitkeep'),
      this.destinationPath('Task-management/3. done/.gitkeep'));
    this.fs.copy(
      this.templatePath('Task-management/4. blocked/.gitkeep'),
      this.destinationPath('Task-management/4. blocked/.gitkeep'));

    this.fs.copyTpl(
      this.templatePath('Test/README.md'),
      this.destinationPath('Test/README.md'),
      {
        projectName: this.projectName
      }
    );
  }
});
