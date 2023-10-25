# Workouts Full Stack App

The Workouts Full Stack App empowers users to seamlessly manage their workouts. This application enables users to add new workouts, remove existing ones, and preview workouts specific to the currently logged-in user.

## Details

* User Authentication: Implemented secure user authentication using JWT tokens to ensure a robust and safe user experience.
* Full Stack Development: Utilizes a full stack approach with React for the frontend and Node.js/Express and mongoDB for the backend, incorporating industry best practices.
* Dockerized: The application is containerized using Docker for simplified deployment and consistent environments.

## Key Features

  * Add New Workouts:
        Users can effortlessly add new workouts to tailor their exercise routine.

  * Remove Workouts:
        Remove workouts that are no longer relevant or part of the fitness plan.

  * Preview Workouts:
        Preview a curated list of workouts that belong to the currently logged-in user, providing a personalized experience.

## Technologies Used

  * Frontend: Developed using React, ensuring a modern and responsive user interface.

  * Backend: Powered by Node.js ,Express and mongoDB, following best practices for scalable and efficient server-side development.

  * Docker: Containerized for easy deployment and consistent environments.
## Getting Started
   In order to run the application you must follow these steps:
   
   1- Clone the repository
   
        
        git clone https://github.com/ihabawad18/Workouts-App.git

        
        

   2- Navigate to the backend folder:

       cd Workouts-App/backend


   3- Create .env file and see the env_sample text file for example values you should include like PORT,DATABASE-PASSWORD etc..

   4- Launching the app in 2 ways:
      
   * 1) Building the docker image and running the container and mapping the ports to 3000 and 4000 on your host.

   * 2) Running this command from the root directory of Workouts-App folder:

   On windows:
   
   ```
      cd backend;npm start;
      cd ../frontend/;npm start;
   ```

   On linux:

   ```
      cd backend && npm start && cd ../frontend/ && npm start
   ```
