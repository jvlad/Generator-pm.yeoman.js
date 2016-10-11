'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  method1: function () {
    console.log('method 1 just ran');
  },
  writing: {
    config: function () {
      console.log('config function just ran');
      this.fs.copy(
        this.templatePath('Design/README.md'),
        this.destinationPath('Design/README.md')
      );

      this.fs.copy(
        this.templatePath('Journal/README.md'),
        this.destinationPath('Journal/README.md')
      );

      this.fs.copy(
        this.templatePath('Research/README.md'),
        this.destinationPath('Research/README.md')
      );

      this.fs.copy(
        this.templatePath('Task-management/README.md'),
        this.destinationPath('Task-management/README.md')
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

      this.fs.copy(
        this.templatePath('Test/README.md'),
        this.destinationPath('Test/README.md')
      );
    },
  }
});
