---
title: companyLocationAssignAddress - GraphQL Admin
description: Updates an address on a company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Location​Assign​Address

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Updates an address on a company location.

## Arguments

* address

  [Company​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

  required

  The input fields to use to update the address.

* address​Types

  [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyAddressType)

  required

  The list of address types on the location to update.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company location to update addresses on.

***

## Company​Location​Assign​Address​Payload returns

* addresses

  [\[Company​Address!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

  The list of updated addresses on the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationAssignAddress reference
