# Go Daddy Assignment

## How to run the app

In the project directory, you can run:

`npm install`\
Installs needed dependencies.

`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Used technologies

1. React
2. Typescript
3. SWR hooks for data fetching and caching
4. Styled Components

## Caveats

- Data fetching can be optimized by using some kind of state management (e.g. Redux) - on the list of repositories, all the data for one repository is already fetched and there is no need to refetch single repo data after clicking on one of the repositories -> implementing this was not done due to time constraint.
- Other improvements that I would consider if I had more time:
  - design improvements
  - UX improvements (maybe using Suspense for managing loading sequence for the repository page)
  - accessibility improvements
  - adding more tests
