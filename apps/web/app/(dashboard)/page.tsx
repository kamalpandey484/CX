"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUsers = useMutation(api.users.add)
  return (
    <>
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <p>Web page</p>
          <UserButton />
          <OrganizationSwitcher hidePersonal />
          <Button onClick={() => addUsers()}>Add user</Button>
          <p>Users in database: {JSON.stringify(users, null, 2)}</p>
        </div>
      </div>
    </>
  )
}
