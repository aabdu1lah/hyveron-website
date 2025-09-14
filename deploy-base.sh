#!/bin/bash
set -e

git fetch origin main
git reset --hard origin/main
sudo docker compose down
sudo docker compose up -d --build
