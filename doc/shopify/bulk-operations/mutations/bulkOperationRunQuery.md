---
title: bulkOperationRunQuery - GraphQL Admin
description: >-
  Creates and runs a [bulk
  operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  to fetch data asynchronously. The operation processes your GraphQL query in

  the background and returns results in a [JSONL](http://jsonlines.org/) file
  when complete.


  Bulk query and bulk mutation operations can run at the same time per shop. The

  number of concurrent operations that an app can run depends on the API

  version. For the applicable concurrency limits, refer to the [bulk operations

  guide](https://shopify.dev/docs/api/usage/bulk-operations/queries). The query

  must include at least one connection field and supports up to five connections

  with a maximum nesting depth of two levels.


  > Note: Results remain available for seven days after completion.


  For more information, see the [bulk operations
  guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# bulk​Operation​Run​Query

mutation

Requires Only accessible by supported access tokens: <https://shopify.dev/docs/api/usage/bulk-operations/queries#access-token-considerations>.

Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operation processes your GraphQL query in the background and returns results in a [JSONL](http://jsonlines.org/) file when complete.

Bulk query and bulk mutation operations can run at the same time per shop. The number of concurrent operations that an app can run depends on the API version. For the applicable concurrency limits, refer to the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries). The query must include at least one connection field and supports up to five connections with a maximum nesting depth of two levels.

***

**Note:** Results remain available for seven days after completion.

***

For more information, see the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).

## Arguments

* group​Objects

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  requiredDefault:false

  Enables grouping objects directly under their corresponding parent objects in the JSONL output. Enabling grouping slows down bulk operations and increases the likelihood of timeouts. Only enable grouping if you depend on the grouped format.

* query

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The query to be executed in bulk.

***

## Bulk​Operation​Run​Query​Payload returns

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  The newly created bulk operation.

* user​Errors

  [\[Bulk​Operation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### bulkOperationRunQuery reference
