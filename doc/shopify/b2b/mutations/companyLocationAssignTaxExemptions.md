---
title: companyLocationAssignTaxExemptions - GraphQL Admin
description: Assigns tax exemptions to the company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignTaxExemptions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignTaxExemptions.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Location​Assign​Tax​Exemptions

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deprecated. Use [companyLocationTaxSettingsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate) instead.

Assigns tax exemptions to the company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The location to which the tax exemptions will be assigned.

* tax​Exemptions

  [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  required

  The tax exemptions that are being assigned to the location.

***

## Company​Location​Assign​Tax​Exemptions​Payload returns

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationAssignTaxExemptions reference
