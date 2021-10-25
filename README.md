# Kilowish Product

This is the Frontend Application for Kilowish, a Next JS application

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instructions

### Getting Started

    git clone https://github.com/kilowish/product-fe.git
    cd product-fe
    yarn install

### Development

To run the local server,

    yarn dev

The `prettier`, and `eslint` libraries are used for formating and error checking. Install their corresponding vscode extensions to use with VSCode.

Using the `.env.example` as a reference, create a local `.env.local` file with the appropriate variables.

### Production

To generate build files for production,

    yarn build

### Test

Coming Soon

### Storybook

To view stories locally,

    yarn storybook

### Deploy Storybook

To deploy build files,

    yarn chromatic
