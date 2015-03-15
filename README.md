# Cashmere
![Cashmere Screenshot](https://www.dropbox.com/s/bb6s49uzbu6vflv/cashmere.png?dl=1)

## Why
Most humans manage their cash flow. Some use a spreadsheet or complex asset management software, while others go rudimentary using a pen, paper and calculator. Cashmere bridges the gap in between.

## Usage
There really isn't much to it. You add *entities*: sources of cash inflow (i.e. *creditors*) and channels of cash outflow (i.e. *debtors*). You then add the amounts. Minimal engagement of grey matter.

## Features
* **All local**: Nothing you type leaves your browser
* **Slick UI**: Clean, color-coded interface that instils confidence
* **Responsive**: Adapts to the screen-size so that you don't have to
* **Cross platform**: It runs in a web-browser; and web-browsers are everywhere
* **Animations**: Transitions you'll love watching
* **Nimble**: Totals update automatically so you have more time to make decisions

New features are added frequently. View the upcoming [enhancements](https://github.com/karmasakshi/cashmere/issues?q=label%3Aenhancement).

## Installation

#### If you're a developer
* Ensure Node.js, NPM, Git, Grunt and Bower is installed
* Clone the repository (or download the .zip)
* Install project dependencies
* Execute `grunt serve:dist` to build and host or copy `bower_components` to `app` and host the `app` folder

#### If you're not a developer
Read a step fully before executing it. Complete a step fully before executing the next.

###### Windows
1. [Download](https://nodejs.org/download/) and install Node.js with the default options. This will also install NPM for you (which is good).
2. [Download](https://git-scm.com/downloads) and install Git. Select the **Use Git from the Windows Command Prompt** option when prompted.
3. Open Command Prompt. Ensure you **Run as Administrator**. Restart if already open to ensure new packages are accessible.
4. Install Grunt by executing `npm install -g grunt-cli`
5. Install Bower by executing `npm install -g bower`
6. Open Command Prompt. Ensure you **Run as Administrator**. Restart if already open to ensure new packages are accessible.
7. Navigate to the folder where you want this project to be installed. For example: `cd \Users\karmasakshi\Projects`.
8. Clone this repository by executing `git clone https://github.com/karmasakshi/cashmere.git`. This will create the project folder.
9. Navigate to the project folder by executing `cd cashmere`
10. Execute `npm install`
11. Execute `bower install`
12. Execute `grunt serve:dist` to build and host the project. Your default web-browser will open automatically.
13. Press **Ctrl+C** to stop hosting

###### Mac
1. [Download](https://nodejs.org/download/) and install Node.js with the default options. This will also install NPM for you (which is good).
2. Install Xcode Command Line Tools (to get Git) by executing the following in Terminal: `xcode-select --install`. Select **Install** in the window that appears.
3. Restart Terminal to ensure new packages are accessible
4. Install Grunt by executing `sudo npm install -g grunt-cli`
5. Install Bower by executing `sudo npm install -g bower`
6. Restart Terminal to ensure new packages are accessible
7. Navigate to the folder where you want this project to be installed. For example: `cd \Users\karmasakshi\Projects`.
8. Clone this repository by executing `git clone https://github.com/karmasakshi/cashmere.git`. This will create the project folder.
9. Navigate to the project folder by executing `cd cashmere`
10. Execute `npm install`
11. Execute `bower install`
12. Execute `grunt serve:dist` to build and host the project. Your default web-browser will open automatically.
13. Press **Ctrl+C** to stop hosting

###### Ubuntu
1. Install Node.js by executing `sudo apt-get install nodejs`
2. Install Node.js wrapper by executing `sudo apt-get install nodejs-legacy`
3. Install NPM by executing `sudo apt-get install npm`
4. Install Git by executing `sudo apt-get install git`
5. Restart Terminal to ensure new packages are accessible
6. Install Grunt by executing `sudo npm install -g grunt-cli`
7. Install Bower by executing `sudo npm install -g bower`
8. Restart Terminal to ensure new packages are accessible
9. Navigate to the folder where you want this project to be installed. For example: `cd \Users\karmasakshi\Projects`.
10. Clone this repository by executing `git clone https://github.com/karmasakshi/cashmere.git`. This will create the project folder.
11. Navigate to the project folder by executing `cd cashmere`
12. Execute `npm install`
13. Execute `bower install`
14. Execute `grunt serve:dist` to build and host the project. Your default web-browser will open automatically.
15. Press **Ctrl+C** to stop hosting

## It's a bug... It's a feature... It's a to-do!
[Issues](https://github.com/karmasakshi/cashmere/issues) are actively maintained. You are invited to be a part of it.

## License
Enjoy responsibly.

## Generator litter

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.