# cypress-cucumber - telnyx.com
Tutorial project for learning Cypress with Cucumber
## Requirement
- Download and install VS Code (https://code.visualstudio.com/Download) or any other IDE.
- Download and install Node.js (https://nodejs.org/en/download/) at least v.14.x
### Installing
- Download or clone my git repository
- Install all depencies **if you don't installed them before (clear project)**

```
npm install --save-dev cypress
```
```
npm install --save-dev @cucumber/cucumber
```
```
npm install --save-dev cucumber-html-reporter
```
```
npm install --save-dev @cypress/browserify-preprocessor
```
```
npm install --save-dev multiple-cucumber-html-reporter 
```
```
npm install --save-dev cypress-cucumber-preprocessor  
```

**Project opening**
- Open project folder in VSCode or another IDE

Features located in: cypress/e2e/*.feature

Page objects located in: cypress/pageobjects/*.js

Step definitions located in: cypress/support/step_definitions/*.js

**Project Run**
- Type in terminal following commands:
```
npm run cypress:open
```
OR
```
npm run cypress:run  
```
- To generate html report type in terminal:
```
npm run cypress:report
```
