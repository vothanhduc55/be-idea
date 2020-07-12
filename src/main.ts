import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

const port = process.env.PORT || 8080;
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    console.log(`Running on ${port}`);
}
bootstrap();
