import { mutation, query } from "./_generated/server"

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect()
    return users
  },
})

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const id = await ctx.db.insert("users", {
      name: "Kamal",
    })
    return id
  },
})
