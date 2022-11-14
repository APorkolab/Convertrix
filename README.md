# Convertrix v.1.0.0 - documentation

## 1. The description of the task

The Convertrix v.1.0.0 application is able to compare the elements stored in its database by weight and size - the elements can be converted into each other by clicking on the desired parameters.

An original converter

> Skills: Front-end
>
> Focus: Data manipulation
>
> Difficulty: 2/5
>
> The idea here is not to convert dollars into euros but rather to
> convert data from one infrequent measurement system to another.
>
> For example: How big is the Eiffel Tower in several automobile? What
> is the weight of the planet Mars in several printers?
>
> Of course, if the converter is well done, it should allow you to
> convert actual units and have equally consistent results!

## 2. Preparations before running the software

There is no need for preparations before running. Just enjoy the weird data! :)

## **3. Version history**

Technologies used: Angular 14 and Bootstrap 5, other NPM libraries (see _package.json_ for the exact list).

### v.1.0.0 (2022-11-01)

- Package size is now customizable,
- The game state is saved to localstorage, if the user moves to another page and then wants to continue the game, the program will reset the state (currently restore after reload is disabled, but it can be enabled).
- Develop appropriate routing.
- Design more faithful to the design specification.
- Bug fixing (complete elimination of 'any').
- Correction of respositivity errors.
- Rationalisation of function assignment and card service.
- Storing data in a Card model instead of JSON, in line with good practice.
- Background map (_thanks to **vedanti** for the wonderful photo: [https://www.pexels.com/photo/gray-pavement-245250/](https://www.pexels.com/photo/gray-pavement-245250/)_).
- **Timeframe used:** _About 16 hours_.

## **4. Install the application**

1.  If you do not have the Git version control software installed, download and install the version for your operating system from [https://git-scm.com](https://git-scm.com/).
2.  If you do not have the NodeJS runtime environment installed, download and install the version marked "LTS" from [https://nodejs.org/en/](https://nodejs.org/en/).
3.  If you do not have the Angular framework installed on your system, do so by issuing the `npm i -g @angular/cli` command in PowerShell.
4.  clone the contents of the relevant GitHub repository. So in PowerShell, issue the following command:

    `git clone https://github.com/APorkolab/Convertrix.git`

5.  **Point 2 provides instructions. Please follow them.**

6.  Install the application dependencies: - In the terminal, go to the /backend folder (`cd backend`) and run `npm i`.

    - frontend

      - On the terminal, run `npm i`.\*

7.1. For manual installation:

- In the terminal, issue the `ng build` command.
- The contents of the /dist/frontend folder must be copied to the webserver if you want to deploy it.

OR

7.2. For automatic installation:

- In the terminal, run the `npm run build` command.
- It is important to install using only one of the methods.

## **5. Configure the application**

- There is no need to configure the application because there is no backend in it.

## **6. Start the application**

- Both the backend and the frontend can be started with the `npm start` command.

## **7. A special thanks to...**

- Thanks for the project idea for Josef Cruz (https://javascript.plainenglish.io/9-super-creative-project-ideas-for-junior-web-developers-e8181e6f4eef)
- Thanks for the data: https://whatthingsweigh.com/
- Thanks for the pretty, responsive HTML template for Amiechen (https://github.com/amiechen/codrops-scribbler) and the upgraded version for EgoistDeveloper (https://github.com/EgoistDeveloper/codrops-scribbler).

## **8. Legal information**

[![Creative Commons License](https://camo.githubusercontent.com/72af7c8e70a45c471163e803748d0338b3b2b52f6b040804e549e4163de72a58/68747470733a2f2f692e6372656174697665636f6d6d6f6e732e6f72672f6c2f62792f342e302f38387833312e706e67)](http://creativecommons.org/licenses/by/4.0/)  
This work by [Ádám Dr. Porkoláb](https://porkolab.digital/) is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).  
Based on a work at [](https://github.com/APorkolab/)[https://github.com/APorkolab/](https://github.com/APorkolab/).
