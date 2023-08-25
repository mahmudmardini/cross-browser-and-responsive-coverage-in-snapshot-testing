#!/bin/bash
# Check the BROWSER environment variable to determine the target browser
if [ "$BROWSER" = "firefox" ]; then
 # If the target browser is Firefox, run Cypress tests for Firefox
 npm run cy:run:firefox
else
 # Otherwise, run Cypress tests for Chrome (assuming it's the default browser)
 npm run cy:run:chrome
fi
