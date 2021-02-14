# Chess analyzer project
The aim of this project is to build a web application in order to analyze chess games and detect mistakes.

## Tech Stack
The idea is to use the following technologies in order to learn more about them:
- **Frontend**: Angular
- **Backend**: Spring boot (Java / Kotlin)
- **Devops**: Jenkins, Docker, Kubernetes, Openshift(?)
- **IDEs**: VSCode, IntelliJ

Any other technology for DB or whatever is more than welcome.

## Dependencies
- @mliebelt/pgn-viewer

## First steps

- In order to get the games archive, the public chess.com API can be used. For example, the games played by dmiralda on April 2020 can be retrived by next endpoint:

    https://api.chess.com/pub/player/dmiralda/games/2020/04

- Make a draft of the APP (How? UML? UI design?). The main idea is to retrieve games from chess.com (and or lichess.com) and then being able to select them in order to analyzed them. It would also be nice to have a dashboard to have an overall picture of the current user.

- Get ideas from:
    https://lucaschess.pythonanywhere.com/thanks

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy project to Github pages

If it is the first time, it is needed to install angular-cli-ghpages:
- npm i angular-cli-ghpages --save-dev

Then:
- ng deploy --base-href "{repo-name}"

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
