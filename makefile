start:
	docker compose up -d --build

stop:
	docker compose down

watch:
	docker logs -f school-management-web

api-gen:
	docker compose exec web npx swagger-cli bundle ./openapi/main.yml -o ./openapi/main.bundle.yml
	docker compose exec web npx openapi-typescript ./openapi/main.bundle.yml -o ./src/core/types/openapi.ts

restart:
	make stop
	make start

prisma-migrate:
	docker compose exec web npx prisma migrate dev --name init

prisma-generate:
	docker compose exec web npx prisma generate

prisma-all:
	make prisma-generate
	make prisma-migrate

prisma-studio:
	docker compose exec web npx prisma studio

# Production commands
start-prod:
	docker compose -f docker-compose.prod.yml up -d --build

stop-prod:
	docker compose -f docker-compose.prod.yml down

restart-prod:
	make stop-prod
	make start-prod

prisma-migrate-prod:
	docker compose -f docker-compose.prod.yml exec web npx prisma migrate deploy

prisma-generate-prod:
	docker compose -f docker-compose.prod.yml exec web npx prisma generate

prisma-studio-prod:
	docker compose -f docker-compose.prod.yml exec web npx prisma studio