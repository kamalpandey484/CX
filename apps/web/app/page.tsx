"use client"

import { SignInButton, UserButton } from "@clerk/nextjs"
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUsers = useMutation(api.users.add)
  return (
    <>
      <Authenticated>
        <div className="flex min-h-svh p-6">
          <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <div>
              <p>Web page</p>
              <UserButton />
              <Button onClick={() => addUsers()}>Add user</Button>
              <p>Users in database: {JSON.stringify(users)}</p>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              (Press <kbd>d</kbd> to toggle dark mode)
            </div>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex min-h-svh items-center justify-center p-6">
          <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <p>
              You are not authenticated. Please sign in to see the content of
              this page.
              <SignInButton mode="modal">Sign in</SignInButton>
            </p>
          </div>
        </div>
      </Unauthenticated>
    </>
  )
}
