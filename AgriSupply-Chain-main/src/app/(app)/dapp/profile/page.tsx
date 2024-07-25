import React from 'react'
import Dashbordlayout from '../(app)/dapp/dashboard/layout'
import { ProfileForm } from './profileForm'
import { Separator } from '@/components/ui/separator'

export default function Profile() {
  return (
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
      </div>
  )
}
