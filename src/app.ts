import express from "express";
import helmet from 'helmet';
import compression from "compression";
import Process from 'process';
import cookieParser from 'cookie-parser';
/* import sequelize from './sequelize'; */

class App {
  public app: express.Application;
  public port: any;
  public force: boolean;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
    this.force = false;

    /* this.checkEnvironmentVariables(); */
    /* this.initialSequelize(this.force); */
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("App listening on the port " + this.port);
    });
  }

/*   private checkEnvironmentVariables() {
    const environmentVariables: string[] = new Array<string>(
      'NODE_ENV',
      'PORT',
      'DB_HOST',
      'DB_USER',
      'DB_PASSWORD',
      'DB_NAME',
      'AWS_S3_BUCKET_NAME',
      'AWS_DYNAMODB_DEVICE_TABLE',
      'AWS_DYNAMODB_CELL_TABLE',
      'SWT_API_KEY'
    );

    environmentVariables.forEach((element) => {
      if (!process.env[element] || process.env[element] === '') throw Error('환경변수가 초기화되지않았습니다. - ' + element);
    });
  } */

/*   private async initialSequelize(force: boolean) {
    await sequelize.sync({ force });
  } */


  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(express.json({ limit: '50mb' })); // To parse the incoming requests with JSON payloads
    this.InitializeCopression();
    /* this.initializeCookie(); */
  }

  private InitializeCopression() {
    this.app.use(compression());
  }

  /* private initializeCookie() {
    this.app.use(cookieParser(Process.env.COOKIE_SECRET_TOKEN));
  } */

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;
