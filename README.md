# Personal Portfolio Website

This website contains information about me, my work experience, and some projects I've worked on. It's hosted at https://annebailey.surge.sh.

## Stack
Built with React using [Gatsby](https://www.gatsbyjs.org/). 

## Installation

1. Install homebrew if not yet installed (instructions [here](https://brew.sh/)).
2. Install yarn if not yet installed (instructions [here](https://yarnpkg.com/en/docs/install#mac-stable)).
3. Install the Gatsby CLI with `npm install -g gatsby-cli`.

## Project Set-Up

- `git clone https://github.com/abailey19/portfolio-website`
- `cd portfolio-website/`
- `yarn install`

## Available Scripts

- `gatsby develop` runs project in development mode
- `gatsby build` creates a production-ready version of the site for deployment
- `surge public/` deploys to surge

## Running Dev Environment

- `cd` into root directory
- `gatsby develop`
- Navigate to [localhost:8080](http://localhost:8000/) to view the site

## Deployment

Deployed using `surge`. Install globally by running `npm install -g surge`.

Run `gatsby build` and then `surge public` to publish. CNAME file is setup so the project deploys to `annebailey.surge.sh`.
