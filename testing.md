## Testing

JavaScript function testing can be found in the [JavaScript Test Results Document](static/docs/FunctionTests.pdf). As most of the logic is handled by Django, the JavaScript codebase is very small.
As DRY functions are imported across the entire application - they are tested within the scope they are executed, ie. a scrollToTop() function is called in app.js. Testing of this function was carried out within this scope and not where the function is declared

>The following devices / browsers were used by me for testing.
>
>* Desktop
>   * Firefox 91
>   * Chrome 94
>* Android
>   * Chrome 94
>   * Firefox 91
>* iOS
>   * Safari 15
>
>I also used [LambdaTest](https://www.lambdatest.com/) to simulate cross browser Testing
>

Testing was seperated into 3 categories; user testing, functional testing & performance testing

### USER TESTING

#### UX & Navigation

>* [Dead Link Checker](https://www.deadlinkchecker.com/) was used to check website links

| Success Criteria             | Test Method                                                                |Result  |Comment|Solution|
| ----------------- | ------------------------------------------------------------------ |--------|-------|--------|
| Wesbite is easy to navigate | Feedback - Client & Users |   PASS           | The clients wants to revisit some elements of the UI in future developments        |       |

An automated or paid user testing service to be considered for future releases

#### Responsiveness

>* [LambdaTest](https://www.lambdatest.com/) & [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) were previously used for testing, unfortunatley both services were unable to test the site once hosted on Heroku. I could not find a simple solution to this (other than copying and pasting code snippets) - so I tested the site manually across multiple devices & browsers.

| Success Criteria             | Test Method                                                                |Result  |Comment|Solution|
| ----------------- | ------------------------------------------------------------------ |--------|-------|--------|
| Fully Responsive | Manual Browsing |   PASS           | This method of testing is unreliable and a remedy needs to be investigated       |       |

#### Accessibility

| Success Criteria            | Test Method                                                  | Result | Comment                                                      | Solution                                                     |
| --------------------------- | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Colour Contrast             | Colours checked on [Color a11y](https://color.a11y.com/Contrast/) | PASS   | CTA button contains contrast errors                | A new button style to be investigated,                                    |


#### Scope / Goals

| Success Criteria                                             | Test Method                                                  | Result | Comment                                                      | Solution |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ | -------- |
| Form controls: Required form controls in place               | Manual Testing                                               | PASS   | -                                                            | -        |
| Colour scheme matches client’s requirements                  | Client Testing                                               | PASS   | -                                                            | -        |
| The website language and message matches what the client requested | Client proof read the content                                | PASS   | -                                                            | -        |
| User stories fulfilled                                       | Family and friends visited the website and provided feedback. | PASS   | -                                                            | -        |
| Overall Client Satisfaction                                  | Client Feedback                                              | PASS   | The client is happy with the initial deployment and is waiting on feedback from users | -        |

#### Validation

| Success Criteria     | Test Method                                              | Result | Comment | Solution |
| -------------------- | -------------------------------------------------------- | ------ | ------- | -------- |
| HTML code validation | [W3C HTML Validator](https://validator.w3.org)           | PASS   | -       | -        |
| CSS code validation  | [W3C CSS Validator](https://jigsaw.w3.org/css-validator) | PASS   | -    |      |
| JS code validation  | [JSHint](https://jshint.com/) | PASS   | -    |      |
| PEP8 code validation  | [PEP8 Online](http://pep8online.com/) | PASS   | -    |      |

>* Validation & Performance Testing is documented in the [Validation & Performance Test Results Document](static/docs/Validation.pdf)
>* Javascript Testing is documented in the [JavaScript Test Results Document](static/docs/FunctionTests.pdf)

### Functional Testing

#### due to it's large size and formatting - The Functional testing is documented in the [Functional Test Results Document](static/docs/Functionality.pdf)

### Performance Testing

>* Validation & Performance Testing is documented in the [Validation & Performance Test Results Document](static/docs/Validation.pdf)

### Outstanding Issues

>* The accessibilty of branding colour remains an issue when used on buttons and actionable elements. In future development of this app, a font stroke, or more contrasting font colour will have to be explored.

>* The issues in the Javascript code relate to the use of async functions in es8 - I am happy to ignore this error.

>* On occassion, the Stripe webhooks fail to return a 200 status from the app when using the test method in Stripes dashboard.

>* In lighthouse there are performance issues regarding the caching of assets (images), as I learn more about Heroku and the django framework, I'll address these issues by implementing a more robust caching strategy.

>* The PEP8 validator returns "line too long" errors on cartain parts of the code. Unfortunatley, these are lines of code that either can't be split, or I have not found a solution to remedy these errors

### Finally

The app responds well when opened, however the serving of the pages seems slower than regular web apps. I believe this is to do with the dyno loading up when the page is initially visited. Other than the few minor issue, which will be resolved in future releases, I am pleased with the overall performance of the app.