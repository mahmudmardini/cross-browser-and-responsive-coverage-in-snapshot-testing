# Dockerfile

# Use the Cypress official image as the base image
FROM cypress/included:10.4.0
# Copy package-lock.json, package.json, and .npmrc to the container
COPY package-lock.json package.json .npmrc ./
# Install project dependencies
RUN npm ci
# Verify Cypress installation
RUN npx cypress verify
# Copy the run-tests.sh script to the container
COPY run-tests.sh ./
# Set the entrypoint to run the run-tests.sh script
ENTRYPOINT ["/bin/bash", "./run-tests.sh"]
