# Installation

## Start Service Containers

`docker-compose -f ./operations/docker-compose.yml up -d `

## Start Backend

`php artisan migrate:fresh`

`php artisan serve`

## Start Frontend

`bun install`

`bun run dev`
