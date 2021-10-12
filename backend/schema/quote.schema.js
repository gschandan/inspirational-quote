import { buildSchema } from "graphql";
// temp schema
export const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
