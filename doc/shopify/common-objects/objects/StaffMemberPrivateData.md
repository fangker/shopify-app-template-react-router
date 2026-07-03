---
title: StaffMemberPrivateData - GraphQL Admin
description: >-
  Represents the data used to customize the Shopify admin experience for a
  logged-in staff member.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberPrivateData
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberPrivateData.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Staff​Member​Private​Data

object

Represents the data used to customize the Shopify admin experience for a logged-in staff member.

## Fields

* account​Settings​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL to the staff member's account settings page.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the staff member was created.

* permissions

  [\[Staff​Member​Permission!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMemberPermission)

  non-nullDeprecated

***

## Map

### Fields with this object

* [StaffMember.privateData](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember#field-StaffMember.fields.privateData)
