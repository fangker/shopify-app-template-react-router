---
title: CompanyLocationTaxSettings - GraphQL Admin
description: Represents the tax settings for a company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationTaxSettings
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationTaxSettings.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Company​Location​Tax​Settings

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Represents the tax settings for a company location.

## Fields

* tax​Exempt

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the location is exempt from taxes.

* tax​Exemptions

  [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  non-null

  The list of tax exemptions applied to the location.

* tax​Registration​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tax registration ID for the company location.

***

## Map

### Fields with this object

* [CompanyLocation.taxSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.taxSettings)
