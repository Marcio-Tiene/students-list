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
  docker-compose up 
  ```  



## Support

## Stay in touch

- Author - [Marcio Tiene](https://github.com/Marcio-Tiene)

## License

This project is [MIT licensed](LICENSE).
