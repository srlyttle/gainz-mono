https://mherman.org/blog/dockerizing-a-react-app/

docker build -t react-node-ts-image .

docker run -d -it -p 3080:3080 --name react-node-ui react-node-ts-image

docker exec -it react-node-ui /bin/sh

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev

docker postgres
https://www.jaygould.co.uk/2020-06-30-docker-fullstack-local-development-node-js-postgres-part2/

view docker logs
docker logs

view package.json in bash cat filename

docker ps - get container id then
get into the container

docker exec -t -i 07eee788be98 /bin/bash

recreate to get latest
docker-compose up -d --build --force-recreate
