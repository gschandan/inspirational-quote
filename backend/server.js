import express from "express";
import { graphqlHTTP } from "express-graphql";
import redis from "redis";
import "dotenv/config";
import { schema } from "./schema/quote.schema.js";
import { resolver } from "./resolver/quote.resolver.js";

const PORT = process.env.PORT || 3001;
//Initialise Redis server on 127.0.0.1:6379 (default)
const client = redis.createClient();
client
	.on("connect", function () {
		console.log("Connected to Redis");
	})
	.on("error", (err) => {
		console.log("Error " + err);
	});

const app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: resolver,
		graphiql: true,
	})
);

app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
