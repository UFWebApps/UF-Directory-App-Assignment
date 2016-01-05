# Introduction to Front-end development with Angular.js
We will continue to build upon our directory application by creating a front-end interface with Angular.js to display listings, as well as the ability to add new listings and delete old ones.

### HTML/CSS
HTML (HyperText Markup Language) is a [**markup language**](https://en.wikipedia.org/wiki/Markup_language) most commonly used to create web pages. CSS (Cascading Style Sheets) is used to describe the presentation of our HTML pages. HTML and CSS are used along with Javascript to create web applications both simple and complex alike. 

Please go through [this tutorial](http://learn.shayhowe.com) to learn the fundamentals of these two web technologies before continuing to the Bootstrap section. Keep in mind that this tutorial is very detailed and may take some time. Make sure to pay specific attention to:

- The semantic nature of HTML
- Layering CSS styles in a modular fashion using multiple classes
- The box model
- Positioning content with CSS

### Bootstrap
While we could create our web application with just HTML, CSS, and Javascript, writing all of our styles from scratch would be tedious. 

Say we have an application that will be used by desktop, tablet, and mobile users alike. Our CSS would have to be **responsive**, changing the layout of the page depending on the user's device. Luckily, we have [**Bootstrap**](http://getbootstrap.com/), a responsive HTML/CSS/JS framework made by Twitter, to style our web applications. Bootstrap provides a [grid system](http://getbootstrap.com/css/#grid) for easy layout and [many components](http://getbootstrap.com/components/#nav) that will give the application a clean, modern, and consistent look. 

Bootstrap's documentation is extensive, so don't worry about memorizing everything Bootstrap has to offer. If you understand the fundamentals of HTML and CSS, you should feel comfortable with the mechanics of the grid system and using classes to add styles to your HTML components. It'll be a better use of time to just refer back to the documentation whenever you need to add a new component to your webpage. 

### Model-View-Controller (MVC) Architecture 
A common design pattern used for developing user interfaces is the **model-view-controller** architecture. As the name suggests, in this architecture the application is broken up into three main components: 

- The **model** is where the application's main data objects are stored. 
- The **view** presents models to the user, and allows the user to interact with the models
- The **controller** interfaces between the model and the view
    - it updates models according to input provided by the user in the view
    - it updates the view when a model changes

The MVC concept has many variations and often does not *exactly* follow the pattern described above. You can take a look at [this page](https://developer.chrome.com/apps/app_frameworks) for more information, or simply go a Google search for MVC architecture. 

### Angular.js 
[**Angular.js**](https://angularjs.org/) is a MVC-based framework (maintained by Google) for developing web applications. Angular makes it (relatively) easy to start building an application by extending HTML so that the markup can describe not only the static webpage but also dynamic behavior. 

Angular would be difficult to succintly describe in this readme. The framework certainly has a learning curve, and you should take some time going through tutorials to understand the basics. Below is a list of resources that may be helpful. 

- **Code School**: [Shaping up with AngularJS](https://www.codeschool.com/courses/shaping-up-with-angular-js)
- **Code Academy**: [Learn AngularJS](https://www.codecademy.com/learn/learn-angularjs)
- [Tutorial provided from the AngularJS website](https://docs.angularjs.org/tutorial)
- **Egghead.io's** [videos on AngularJS](https://egghead.io/technologies/angularjs)

You *do not* need to go through all of these, just start to get familiar enough with Angular-specific concepts to complete this assignment, particularly the following: 
- [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel)
- [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
    - $index
- [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)

### Assignment 
