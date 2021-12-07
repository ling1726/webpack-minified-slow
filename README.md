# Webpack 5 is slower at loading minfied files

Webpack loads files a lot slower if they are minified. In this example the `src` folder
contains some a sample bit of code from the `@fluentui/react-icons` package. The only difference between
the two test cases is that they use `preffified.js` and `minified.js` which are prettified vs minified
respectively. The code for both test cases are exactly the same.

## Installation

`npm install`

## Usage

### Get time for the fast run
`time npm run start:fast`

### Get time for the slow run
`time npm run start:slow`