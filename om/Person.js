import client from "../client";
import { Entity, Schema } from "redis-om";

class Person extends Entity {}

const personSchema = new Schema(Person, {
  firstName: { type: "string" },
  lastName: { type: "string" },
  age: { type: "number" },
  verified: { type: "boolean" },
  location: { type: "point" },
  locationUpdated: { type: "date" },
  skills: { type: "string[]" },
  personalStatement: { type: "text" },
});

await personRepository.createIndex();
eexport default personRepository = client.fetchRepository(personSchema);
