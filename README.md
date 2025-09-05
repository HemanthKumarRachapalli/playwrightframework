# Introduction
This is an automated testing framework using Playwright and TypeScript for the nop Commerce web application. It supports multiple environments.


# Initial Setup
After cloning the repository to your local machine, you need to install the project dependencies and the necessary browser binaries for Playwright. Open your terminal in the project's root directory and run the following commands.
1. npm install
2. npx playwright install

# Configuration
This project's configuration is managed through two key areas:
Environment Variables (`.env` file): Used for storing sensitive data like credentials and environment-specific settings. This file must be created locally and is not committed to version control.

Configuration Files (`/configs`): This directory contains JSON files for each environment (`dev-env.json`, etc.), which store non-sensitive details like URLs and API endpoints.

# Getting Started
To begin testing, please follow these key steps:
1. Set Environment: In your local `.env` file, specify the target environment (e.g., ENV=dev).
2. Test Data: The framework uses JSON files located in the `testData/` directory to supply data for the tests.

# Test Execution & Reporting
After running the tests, a detailed HTML report is automatically generated. You can open this report to view a comprehensive breakdown of the test results, including passed and failed tests, execution duration, and console logs.