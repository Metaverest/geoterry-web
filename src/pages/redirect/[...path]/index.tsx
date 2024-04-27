import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import isString from 'lodash/isString'
import isArray from 'lodash/isArray'

const DynamicHomeFeature = dynamic(() => import('../../../components/home/feature'))

const Redirect: NextPageWithLayout = () => {
  const router = useRouter()
  const { path } = router.query

  useEffect(() => {
    const handleDeepLink = (path: string): void => {
      window.location.href = `checkly://${path}`
    }

    if (isArray(path)) {
      handleDeepLink(path.join('/'))
    }

    if (isString(path)) {
      handleDeepLink(path)
    }
  }, [path, router])

  return (
    <>
      <DynamicHomeFeature />
    </>
  )
}

Redirect.getLayout = (page) => <MainLayout excludeHeaderFooter>{page}</MainLayout>

export default Redirect
