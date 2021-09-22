# Students list full stack app

## Description

It's a full stack nestjs/nextjs/graphql/postgress/docker app

## How run this app

1. Make sure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed.
2. Rename `.env.sample` file to `.env` only. Then if you want, change the variables values to your needs.
3. If it's the first time you run this container you'll need to run:

  ```bash
  #create netework first 
  ./create-network.sh 

  ```

4. To start the container.

  ```bash
  #start container
  docker-compose up 
  ```

5. To stop the container.

  ```bash
  #stop container
  docker-compose down
  ```
6. To rebuild image for any new depenecy you inject run
```bash
  #start container
  docker-compose up --build
  ```  
### The app will e running on [http://localhost:3000](http://localhost:3000) and graphql playground will be running on [http://localhost:4000/graphql](http://localhost:4000/graphql)

## To run migrations 
  With the docker running: 
  1. Go to api folder 
```bash
 cd ./api
  ```  
2. Install dependencies
```bash
  yarn or npm -i
  ```    
3. Run 
```bash
 yarn migration:run or npm run migration:run 
  ```  
## To seed some fake data to database 
  With the docker running: 

1. Go to api folder 
```bash
 cd ./api
  ```  
2. Install dependencies
```bash
  yarn or npm -i
  ```    
3. Run follow script to  insert 100 random students on db
```bash
  yarn run:command seed:students or npm run run:command seed:students
  ```    

## Support

## Stay in touch

- Author - [Marcio Tiene](https://github.com/Marcio-Tiene)

## License

This project is [MIT licensed](LICENSE).
