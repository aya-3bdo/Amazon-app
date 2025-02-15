# Amazon Clone Web app
>**The main and enhanced version**

## Description

This is a React-based web application that serves as a clone of Amazon website. The project focuses on replicating the header, footer, main carousel, and product carousels of Amazon website. The primary focus of this project is the shopping cart functionality, which has been implemented in two different ways using Redux Toolkit 
(RTK) in two different versions: 
  - **Synchronous** cart management using JSON-server API **only** for fetching products. While localStorage was used to save the Shopping cart items, *`which is available in`* [LocalStorage branch](https://github.com/aya-3bdo/Amazon-App/tree/LocalStorage-version)
  - **Asynchronous** cart management using JSON Server API for fetching products and save Shopping cart items, simulating real-world backend integration. `this branch`

## Features

  - Cloned header and footer from Amazon website.
  - Replicated the main carousel and product carousels.
  - Implemented a shopping cart functionality using RTK.
  - Asynchronous cart management using a JSON Server API and RTK using [RTKQuery and createAsyncThunk].
  - Included sign-in and sign-up pages (UI only, no authentication logic).
  - Error page.

## Technologies Used:

   - React.js
   - React Router
   - Redux Toolkit (RTK)
   - CSS
   - Bootstrap
   - React Icons
   - Axios
   - Vite
   - JSON Server

## Installation

- Clone the repository:

    `git clone -b AthycTunk-Migration-fixing https://github.com/aya-3bdo/Amazon-App.git`

### Install Instructions:

   **Please run these commands in your terminal in order:**
   - To install dependencies:
     
      - `npm i`

   - To Start the Server and run the project:

      - `npm run start & npm run dev` 


## Deployment

The enhanced version of the project has been deployed to Netlify and can be accessed at the following URL: [Amazon app](https://amazon-web-clone-app.netlify.app/)


## Contact
 **For any questions or feedback, please feel free to reach out to me:**

   - Email: ayaa.abdo96@gmail.com 

