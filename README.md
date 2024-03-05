# AI MODEL WEBSITE

This project has an application that captures the nuances of a real-life production application, and shows the various models available, and allows end-users to select and explore any one model. Each model includes its title, provider, description, uses and sample code. This is part of Atlan Frontend Assignment, build using React + Vite + TailwindCSS. This project includes the frontend side only. It is hosted on Netlify.

Link to the application: https://65e71e6a8eccdc0c3047c250--resilient-syrniki-e2af52.netlify.app/explore

# FEATURES

* This project contains four main pages, one is the home page, the second is the explore page which contains the list of models.
* Each model can be clicked on and we can get further information about each one of the models. 
* The third is the most liked models. In this page the models are sorted according to the number of likes. 
* When we open the assigned to an individual model, we can open like a particular model along with the reason of why we are liking that particular model. That particular reason is then displayed in the model cards along with the number of likes.
* There is an upload page where the user can upload a model.

# DATA

The data used in the application is obtained from https://jsonplaceholder.typicode.com/, a website that can easily generate free apis. But one drawback of this site is that it has a limit of 10000 characters, due to which the numbers of the models in this project are only 5.

# Frameworks + Libraries used

* React JS - JavaScript library for building user interfaces that efficiently updates and renders components in response to data changes, enabling the development of dynamic and interactive web applications.

* Vite - Vite is a fast and modern build tool for web development that focuses on quick development server start-up, efficient development workflows, and optimized production builds for JavaScript and TypeScript projects.

* TailwindCSS - Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes, enabling rapid and flexible development of modern and responsive user interfaces.

# Optimisations used

* Despite a slim probability of mobile device usage for this kind of application, the website is very responsive.

* Reorganized the code to reuse parts and, where needed, import as little as possible.

* The page was created with the least amount of dependencies.
