---
title: Vector3 - GraphQL Admin
description: |-
  Representation of 3d vectors and points. It can represent
  either the coordinates of a point in space, a direction, or
  size. Presented as an object with three floating-point values.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Vector3'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Vector3.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Vector3

object

Requires `read_products` access scope.

Representation of 3d vectors and points. It can represent either the coordinates of a point in space, a direction, or size. Presented as an object with three floating-point values.

## Fields

* x

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The x coordinate of Vector3.

* y

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The y coordinate of Vector3.

* z

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The z coordinate of Vector3.

***

## Map

### Fields with this object

* [Model3dBoundingBox.size](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dBoundingBox#field-Model3dBoundingBox.fields.size)
