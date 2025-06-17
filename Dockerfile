# STEP 1: Install dependencies and build app
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js app
RUN npm run build

# STEP 2: Production image
FROM node:22-alpine
WORKDIR /app

# Copy built app and install only prod deps
COPY --from=builder /app ./
RUN npm install --omit=dev

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
