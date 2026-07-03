---
title: companyAddressDelete - GraphQL Admin
description: Deletes a company address.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Address​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deletes a company address.

## Arguments

* address​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the address to delete.

***

## Company​Address​Delete​Payload returns

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted address.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyAddressDelete reference
