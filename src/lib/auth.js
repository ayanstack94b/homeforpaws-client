// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGO_URI);
// await client.connect();

// const db = client.db("homeForPawsDB");


// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client,
//   }),
//   emailAndPassword: {
//     enabled: true,
//   },
// });

import { betterAuth } from "better-auth";

import { mongodbAdapter } from "better-auth/adapters/mongodb";

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

await client.connect();

const db = client.db("homeForPawsDB");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

  secret: process.env.BETTER_AUTH_SECRET,

  baseURL: process.env.BETTER_AUTH_URL,
});
