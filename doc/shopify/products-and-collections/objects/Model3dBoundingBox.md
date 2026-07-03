---
title: Model3dBoundingBox - GraphQL Admin
description: Bounding box information of a 3d model.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dBoundingBox'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dBoundingBox.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Model3d​Bounding​Box

object

Requires `read_products` access scope.

Bounding box information of a 3d model.

## Fields

* size

  [Vector3!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Vector3)

  non-null

  Size in meters of the smallest volume which contains the 3d model.

***

## Map

### Fields with this object

* [Model3d.boundingBox](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.boundingBox)
