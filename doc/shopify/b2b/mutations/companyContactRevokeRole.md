---
title: companyContactRevokeRole - GraphQL Admin
description: Revokes a role on a company contact.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Contact​Revoke​Role

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Revokes a role on a company contact.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the contact to revoke a role from.

* company​Contact​Role​Assignment​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the role assignment to revoke from a contact.

***

## Company​Contact​Revoke​Role​Payload returns

* revoked​Company​Contact​Role​Assignment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The role assignment that was revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactRevokeRole reference
