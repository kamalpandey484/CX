"use client"
import { useOrganization } from "@clerk/nextjs"
import { OrgSelectionView } from "@/modules/auth/ui/views/org-selection-view"

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { organization } = useOrganization()
  if (!organization) {
    return (
      <div>
        <OrgSelectionView />
      </div>
    )
  }
  return <div>{children}</div>
}
