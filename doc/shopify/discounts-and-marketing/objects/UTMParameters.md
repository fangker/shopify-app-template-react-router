---
title: UTMParameters - GraphQL Admin
description: Represents a set of UTM parameters.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# UTMParameters

object

Represents a set of UTM parameters.

## Fields

* campaign

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of a marketing campaign.

* content

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Identifies specific content in a marketing campaign. Used to differentiate between similar content or links in a marketing campaign to determine which is the most effective.

* medium

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The medium of a marketing campaign, such as a banner or email newsletter.

* source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The source of traffic to the merchant's store, such as Google or an email newsletter.

* term

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Paid search terms used by a marketing campaign.

***

## Map

### Fields with this object

* [CustomerVisit.utmParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.utmParameters)
* [MarketingActivity.utmParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.utmParameters)
