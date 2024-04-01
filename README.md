
# The Tech Sphere Blog

Welcome to The Tech Sphere's tech blog repository! This repository hosts the codebase for our tech blog website, where we share insights, tutorials, and news about various technologies and trends in the tech industry.

## Overview

The Tech Sphere blog is built using WordPress for its content management system and Gatsby for its frontend. We utilize the native REST API provided by WordPress to fetch blog posts and display them on our Gatsby-powered frontend.

### Technologies Used:

- WordPress
- WordPress REST API
- Gatsby
- Docker
- MariaDB

## Wordpress side
![chrome-capture-2024-4-1](https://github.com/VanLMC/techsphere-blog/assets/39391737/05fa9c17-e9d7-4e8a-b35c-7827b799c645)


## React (gatsby) side
![chrome-capture-2024-4-1 (2)](https://github.com/VanLMC/techsphere-blog/assets/39391737/3701a0a8-73dd-484e-a62a-99a4d5eaa66f)

## Installation and Setup

### WordPress (wp)

1. Create `.env` variables following the `.env.example` file.
2. Run Docker Compose: `docker-compose up`.
3. Set up WordPress normally through the provided Docker container.
4. Change permalinks in Settings > Permalinks to Post Name to enable WordPress's native REST API.

### Gatsby

1. Install dependencies: `yarn install`.
2. Run Gatsby: `yarn start`.

## Custom Features

- **Formatted Blog Titles**: We have implemented a filter for the homepage title ensuring consistency.



