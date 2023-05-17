<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Book Management API</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a RESTful API for managing books, built with Express.js and MongoDB. It allows users to sign up, login, create, delete, update, and view books. The API provides a simple and intuitive interface for managing a collection of books.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


Technologies used

* Express js
* Mongoose
* Bcrypt
* Jsonwebtoken
* Dotenv
* Nodemon

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To run this API on your local machine, make sure you have the following dependencies installed:

* Node.js (v14 or above)
* npm (Node Package Manager)
* MongoDB

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/barakadanny/Books-library-api-nodejs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```js
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## End Points

User Endpoints

```js
    POST /auth/signup: Create a new user account.
    POST /auth/login: Authenticate and log in the user.
```

```js
    GET /book: Retrieve a list of all books.
    GET /book/:id: Retrieve a specific book by ID.
    POST /book: Create a new book.
    PUT /book/:id: Update an existing book by ID.
    DELETE /book/:id: Delete a book by ID.
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->

<!-- ACKNOWLEDGMENTS -->
