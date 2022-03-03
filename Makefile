#!/bin/bash

run:
	@docker-compose up -d

stop:
	@docker-compose down

test:
	@docker exec -i api-dev sh -c 'npm run test'

lint:
	@docker exec -i api-dev sh -c 'npm run lint'

lint-fix:
	@docker exec -i api-dev sh -c 'npm run lint:fix'


.PHONY: test run stop
