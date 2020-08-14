import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { MessagesModule } from './messages/messages.module';

@Module
({
	imports:
	[
		GraphQLModule.forRoot
		({
			typePaths: ['./**/*.graphql']
		}),
		MessagesModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
