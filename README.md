# Adopt Me!
My implementation of Adopt Me! React App. From [Brian Holt's](https://twitter.com/holtbt) course on [React v18](https://frontendmasters.com/courses/complete-react-v8/).

## Usage
First, clone the API server from [here](https://github.com/devinstewart/adopt-me-api). Follow the instructions in the README to get the server up and running.

Next, install the dependencies and run the app in development mode.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Differences
I've made a few changes to the code from the course. I've also added some additional features.
1. Brian accepts the default `eslint` and `prettier` rules. I've added four spaces, no trailing commas, single quotes and function declarations.
2. Fixed accessibility issues with the `Carousel` component.
3. Retrieved Animal data from the API server.
4. Changed search to take city and state as separate inputs.
5. Organized code stucture into separate folders.
6. Made some CSS changes to freshen up the look.
7. Added a favicon.
8. More to come...