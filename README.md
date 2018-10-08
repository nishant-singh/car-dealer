# Car Dealers

A Cars merchant management app, leveraging true power of react with redux and elegant design.

![](https://image.ibb.co/eQLXtp/Car_Dealers.png)

## Features

- Single page Application with React
- Uses Redux forms for managing add/edit forms.
- Redux Saga is used as middleware
- Mocked APIs using json-server
- Uses SCSS as css pre-processor

## How to run

### Pre-requisites

1. Machine should have node and npm installed
2. Machine should have json-server globally installed
   `npm install -g json-server`
3. Go to car-dealer directory and run
    `npm install`

### Running application

- Before running application, make sure have json-server running  on port 3001.
  `json-server db.json --port 3001`
- Command to run application
  `npm start`
  
### Testing
  Execute to run test cases:
  `npm test`
  
### Test coverage
  To get test coverage:
  `node scripts/test.js --env=jsdom --coverage`
