/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  // const avatarUrl = author?.avatar?.url
  // Disable this because gravatar.com is not accessible in China.
  // was https://secure.gravatar.com/avatar/2f07bf0645c384fd06c10a32525c1a1a?s=96&d=mm&r=g
  const avatarUrl = 'https://portrait.gitee.com/uploads/avatars/user/2469/7409436_tobyglei_1604927688.png'

  return (
    <div className="bio">
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )}
      {author?.firstName && (
        <p>
          Written by <strong>{author.firstName}</strong>
          {` `}
          {author?.description || null}
          {` `}
          {author?.twitter && (
            <a href={`https://twitter.com/${author?.twitter || ``}`}>
              You should follow them on Twitter
            </a>
          )}
        </p>
      )}
    </div>
  )
}

export default Bio
