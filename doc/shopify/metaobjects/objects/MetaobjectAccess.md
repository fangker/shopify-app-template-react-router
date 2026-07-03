---
title: MetaobjectAccess - GraphQL Admin
description: Access permissions for the definition's metaobjects.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metaobject​Access

object

Access permissions for the definition's metaobjects.

## Fields

* admin

  [Metaobject​Admin​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectAdminAccess)

  non-null

  The access permitted on the Admin API.

* customer​Account

  [Metaobject​Customer​Account​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectCustomerAccountAccess)

  non-null

  The access permitted on the Customer Account API.

* storefront

  [Metaobject​Storefront​Access!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectStorefrontAccess)

  non-null

  The access permitted on the Storefront API.

***

## Map

### Fields with this object

* [MetaobjectDefinition.access](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.access)
* [StandardMetaobjectDefinitionTemplate.access](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate#field-StandardMetaobjectDefinitionTemplate.fields.access)
