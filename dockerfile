# Step 1: Build stage
FROM node:20.10.0-alpine AS builder

# Step 2: Add args
ARG NEXT_API_URL=${NEXT_API_URL}

# Set the working directory
WORKDIR /app

# Step 3: Copy only the necessary files for installing dependencies
COPY package.json yarn.lock ./

# Step 4: Install dependencies (all dependencies needed for the build)
RUN yarn cache clean && yarn install --frozen-lockfile --production=false

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Next.js application
RUN yarn build

# Step 7: Remove node_modules
RUN rm -rf node_modules

# Step 8: Install production node_modules
RUN yarn install --production

# Step 9: Production stage
FROM node:20.10.0-alpine AS production

# Step 10: Set the working directory
WORKDIR /app

# Step 11: Copy necessary files from the build stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/.next ./.next

# Step 12: Expose the port for the Next.js server
EXPOSE 3000

# Step 13: Start the Next.js application
CMD ["sh", "-c", "yarn start -p 3000"]


