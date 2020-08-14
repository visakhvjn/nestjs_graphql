import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";

@Resolver()
export class MessagesResolver
{
	messages =
	[
		{id: 0, description: "Hello World"},
		{id: 1, description: "Hello World 2"},
		{id: 2, description: "Hello World 3"},
	];

	@Query("messages")
	getAllMessages()
	{
		return this.messages;
	}

	@Mutation("createMessage")
	createMessage(@Args("description") description: string)
	{
		const newMessage = {id: 3, description: description};
		this.messages.push(newMessage);

		return(newMessage);
	}
}