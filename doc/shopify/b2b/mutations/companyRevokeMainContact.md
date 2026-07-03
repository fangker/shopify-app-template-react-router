---
title: companyRevokeMainContact - GraphQL Admin
description: Revokes the main contact from the company.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Revoke​Main​Contact

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Revokes the main contact from the company.

## Arguments

* company​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company to revoke the main contact from.

***

## Company​Revoke​Main​Contact​Payload returns

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The company from which the main contact is revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyRevokeMainContact reference
