# Portfolio
For like the 500th time im redisigning my portfolio. this time in react js with a nord colour scheme because im obssesed with the nord colour scheme. my frigate, vs code, hyprland, browser is all Nord.

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