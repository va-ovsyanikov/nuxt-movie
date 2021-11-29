


dev:
	docker-compose -f docker-compose.yml up --build


prod:
	docker-compose -f docker-compose.prod.yml up -d


down:
	docker-compose down


rmimage:
	docker image prune -a


