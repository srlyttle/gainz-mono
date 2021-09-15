https://mherman.org/blog/dockerizing-a-react-app/

docker build -t react-node-ts-image .

docker run -d -it -p 3080:3080 --name react-node-ui react-node-ts-image

docker exec -it react-node-ui /bin/sh

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev
