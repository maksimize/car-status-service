build:
	docker build -t car-status-service .
push
    docker tag car-status-service:latest 409506722486.dkr.ecr.ap-southeast-1.amazonaws.com/car-status-service:latest
    docker push 409506722486.dkr.ecr.ap-southeast-1.amazonaws.com/car-status-service:latest
