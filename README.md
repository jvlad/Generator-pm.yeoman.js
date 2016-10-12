# generator-pm
Yeoman generator for Project Management and Documentation Repository.    
Project Management and Documentation Repository is just a folder where you can keep all project specs, notes and tasks in form of regular files: text, images and any others.  
"pm" stays for "Project Management".

## Installation and Usage

1. Create directory for your documentation repository and navigate there

    ```bash
    mkdir <DOC_REPO_NAME>
    cd <DOC_REPO_NAME>
    ```

1. Install [Yeoman](http://yeoman.io) (we assume you have pre-installed [node.js](https://nodejs.org/))

    ```bash
    npm install -g yo
    ```

1. Install generator-pm using [npm](https://www.npmjs.com/). You have 2 options here:

    * global installation (to use generator-pm multiple times for different projects)

      ```bash
      npm install -g generator-pm
      ```

    * local installation (to use it only while you are in current\_project\_folder)

      ```bash
      npm install generator-pm
      ```

1. Run generator

    ```bash
    yo pm
    ```

1. Follow the prompts

    After this you should see in your output something like

    ```
    create README.md
    create .gitignore
    create Design/README.md
    create Journal/README.md
    create Research/README.md
    create Task-management/README.md
    create Task-management/1. backlog/.gitkeep
    create Task-management/2. progress/.gitkeep
    create Task-management/3. done/.gitkeep
    create Task-management/4. blocked/.gitkeep
    create Test/README.md
    ```

1. That's it. Now you can add and store the documentation and all of your notes in organized way.

## Generated Files Structure (as for v0.1.7 of npm package)
├── README.md  
├── .gitignore  

├── Design  
│   └── README.md  

├── Journal  
│   └── README.md  

├── Research  
│   └── README.md  

├── Task-management  
│   ├── 1. backlog  
│   ├── 2. progress  
│   ├── 3. done  
│   ├── 4. blocked  
│   └── README.md  

└── Test  
      └── README.md  

## License

Apache-2.0 © [Vlad Zamskoi](https://www.freeraven.com)


[npm-image]: https://badge.fury.io/js/generator-pm.svg
[npm-url]: https://npmjs.org/package/generator-pm
[travis-image]: https://travis-ci.org//generator-pm.svg?branch=master
[travis-url]: https://travis-ci.org//generator-pm
[daviddm-image]: https://david-dm.org//generator-pm.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-pm
