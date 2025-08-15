// schemas/admin.ts
import { defineType, defineField, StringRule } from "sanity";

export default defineType({
  name: "admin",
  title: "Admin Users",
  type: "document",
  fields: [
    defineField({
      name: "username",
      title: "Username",
      type: "string",
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: "password",
      title: "Password (plain text - for demo only)",
      type: "string",
      validation: (rule: StringRule) => rule.required(),
    }),
  ],
});
