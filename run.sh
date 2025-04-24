#!/bin/bash

# Get the latest numeric tag from Docker Hub
LATEST_TAG=$(curl -s https://hub.docker.com/v2/repositories/narek97/front-app/tags/?page_size=1 | jq -r '.results[0].name')

# If latest tag is a number, increment it; else start at 1
if [[ "$LATEST_TAG" =~ ^[0-9]+$ ]]; then
  TAG=$((LATEST_TAG + 1))
else
  TAG=1
fi

echo "🚀 Building Docker image with tag: $TAG"

# Build with docker-compose (will build as :latest unless your compose file uses ${TAG})
docker compose \
  --env-file=/Users/narekbabayan/Desktop/devops/nest-next-deployment/.env_front \
  -f docker-compose-build.yml up --build

# Tag the image manually: source -> target
docker tag narek97/myapp-front:latest narek97/myapp-front:$TAG

# Push the new version
docker push narek97/myapp-front:$TAG

echo "✅ Image pushed as: narek97/myapp-front:$TAG"
