import React from 'react'
import { graphql } from 'gatsby'
import { format } from 'date-fns'
import { Typography, Paper, Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { LocalizedLink } from '../components/localizedLink'
import { Seo } from '../components/seo'
import { Layout } from '../components/layout'
import { useDateFormat } from '../hooks/useDateFormat'

const IndexPage = (props) => {
  const { t } = useTranslation('index')
  const dateFormat = useDateFormat()

  const { data } = props

  return (
    <Layout {...props}>
      <Seo title={t('title')} description={t('description')} />
      <Stack spacing={2}>
        <Typography variant="h3">{t('title')}</Typography>
        {data.allFile.nodes.map(({ childMdx }, i) => {
          const { slug, title, foreword, date } = childMdx.frontmatter
          return (
            <Paper
              component={Stack}
              variant="outlined"
              spacing={2}
              key={i}
              sx={{ p: 2 }}
            >
              <Typography variant="h4">{title}</Typography>
              <Typography>📅 {format(new Date(date), dateFormat)}</Typography>
              <Typography variant="body2">{foreword}</Typography>
              <Button variant="contained" component={LocalizedLink} to={slug}>
                {t('readMore')}
              </Button>
            </Paper>
          )
        })}
      </Stack>
    </Layout>
  )
}

export default IndexPage

export const postsQuery = graphql`
  query ($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
            foreword
            date
          }
        }
      }
    }
  }
`
