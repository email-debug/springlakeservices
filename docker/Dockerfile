# Spring Lake Services — persistent dev environment (agent slot)
# Single container running both Vite (frontend) and Express (backend).
# Production multi-stage build lives in the repo root Dockerfile — leave that alone.
FROM node:22-alpine

RUN apk add --no-cache bash git ca-certificates

WORKDIR /app

# Install root deps first (cache layer)
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Install server deps (separate workspace)
COPY server/package.json server/package-lock.json ./server/
RUN npm ci --ignore-scripts --prefix server

# Copy source (volume-mounted at runtime, but baked in for first boot)
COPY . .

ENV NODE_ENV=development
ENV VITE_DEV_PORT=5220
ENV EXPRESS_PORT=3220

EXPOSE 5220 3220

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=5 \
    CMD wget -q -O /dev/null http://127.0.0.1:5220 || exit 1

# Run frontend and backend concurrently. Bypass package.json `dev` script because
# it hardcodes the deprecated --port 5273; invoke vite/tsx directly so VITE_DEV_PORT
# and EXPRESS_PORT control the actual ports.
CMD ["sh", "-c", "npx concurrently --names vite,express --prefix-colors cyan,magenta \"npx vite --host 0.0.0.0 --port ${VITE_DEV_PORT}\" \"cd server && npx tsx watch src/index.ts\""]
