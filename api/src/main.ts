import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  const jsonParseMiddleware = json();
  app.use((req: any, res: any, next: any) => {
    // do not parse json bodies if we are hitting file uploading controller
    if (req.path.indexOf('/files') === 0) {
      next();
    } else {
      jsonParseMiddleware(req, res, next);
    }
  });

  await app.listen(3000);
}
bootstrap();
