---
title: MetafieldAccess - GraphQL Admin
description: Access permissions for the definition's metafields.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldAccess'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldAccess.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Access

object

Access permissions for the definition's metafields.

## Fields

* admin

  [Metafield​Admin​Access](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldAdminAccess)

  The access permitted on the Admin API.

* customer​Account

  [Metafield​Customer​Account​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldCustomerAccountAccess)

  non-null

  The access permitted on the Customer Account API.

* storefront

  [Metafield​Storefront​Access](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldStorefrontAccess)

  The access permitted on the Storefront API.

***

## Map

### Fields with this object

* [MetafieldDefinition.access](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.access)
