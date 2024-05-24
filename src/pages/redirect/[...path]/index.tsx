import React, { useCallback, useEffect } from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import isString from 'lodash/isString'
import isArray from 'lodash/isArray'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'

const Redirect: NextPageWithLayout = () => {
  const router = useRouter()
  const { path } = router.query

  const redirect = useCallback(() => {
    const handleDeepLink = (path: string): void => {
      window.location.href = `checkly://${path}`
    }

    if (isArray(path)) {
      handleDeepLink(path.join('/'))
    }

    if (isString(path)) {
      handleDeepLink(path)
    }
  }, [path])

  useEffect(() => {
    redirect()
  }, [redirect])

  return (
    <div>
      <Typography variant="body2" color="text.primary">
        Redirecting to Checkly app...
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <MenuItem onClick={() => redirect()} sx={{ py: '6px', px: '12px' }}>
          <Typography variant="body2" color="text.primary">
            Click here if auto open app does not work
          </Typography>
        </MenuItem>
      </Box>
    </div>
  )
}

Redirect.getLayout = (page) => <MainLayout excludeHeaderFooter>{page}</MainLayout>

export default Redirect
