---
title: companyLocationRevokeTaxRegistration - GraphQL Admin
description: Revokes tax registration on a company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxRegistration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxRegistration.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Location​Revoke​Tax​Registration

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deprecated. Use [companyLocationTaxSettingsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate) instead.

Revokes tax registration on a company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The location whose tax registration is being revoked.

***

## Company​Location​Revoke​Tax​Registration​Payload returns

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationRevokeTaxRegistration reference
