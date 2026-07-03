---
title: TaxAppConfiguration - GraphQL Admin
description: Tax app configuration of a merchant.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Tax​App​Configuration

object

Requires `read_taxes` access scope. Also: The user must have access to manage taxes.

Tax app configuration of a merchant.

## Fields

* state

  [Tax​Partner​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxPartnerState)

  non-null

  State of the tax app configuration.

***

## Map

No referencing types

***

## Mutations

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)

  mutation

  Allows tax app configurations for tax partners.

  * ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    ### Arguments

    Configures whether the tax app is correctly configured and ready to be used.

  ***

***

## TaxAppConfiguration Mutations

### Mutated by

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)
