---
title: companyAssignMainContact - GraphQL Admin
description: Assigns the main contact for the company.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Assign​Main​Contact

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Assigns the main contact for the company.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company contact to be assigned as the main contact.

* company​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company to assign the main contact to.

***

## Company​Assign​Main​Contact​Payload returns

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The company for which the main contact is assigned.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyAssignMainContact reference
