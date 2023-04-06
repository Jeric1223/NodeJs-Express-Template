import App from './app';
import TempController from './controllers/temp.controller';

const app = new App(
  [
    new TempController(),
  ],
  Number(process.env.PORT) || 3000
);

app.listen();
