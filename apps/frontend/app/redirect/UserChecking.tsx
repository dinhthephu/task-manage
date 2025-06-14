'use client'

import { useUser } from '@auth-client'
import { useEffect } from 'react'
import { getRecentVisit } from '@dinhphu/core/client'

export default function UserChecking() {
  const { user } = useUser()

  useEffect(() => {
    if (user && user.id) {
      const recentVisit = getRecentVisit(user.id)
      if (recentVisit) {
        const location = window.location
        location.href = `${location.protocol}//${location.host}${recentVisit}`
      } else {
        location.href = `${location.protocol}//${location.host}/organization`
      }
    }

    // NOTE: if user is invalid or sexsion expired <GoaliarProvider /> do the redirect to /sign-in
    // so, DO NOT add any redirect code to /sign-in HERE
  }, [user])
  return <></>
}
