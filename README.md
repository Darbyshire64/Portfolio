# Portfolio
For like the 500th time im redisigning my portfolio. this time in react js with a nord colour scheme because im obssesed with the nord colour scheme. my frigate, vs code, hyprland, browser is all nord.

## Docker CI/CD

This repository includes a GitHub Action that automatically builds and pushes Docker images to Docker Hub on every commit.

### Setup

To enable automatic Docker image publishing, add the following secrets to your GitHub repository:

1. `DOCKER_USERNAME` - Your Docker Hub username
2. `DOCKER_PASSWORD` - Your Docker Hub access token

### Docker Image

The built image is available at: `docker.io/darbyshire64/portfolio`

Tags:
- `latest` - Latest build from main branch
- `<branch-name>` - Latest build from specific branch
- `<branch-name>-<commit-sha>` - Specific commit build

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build Docker image locally
docker build -t portfolio .
```