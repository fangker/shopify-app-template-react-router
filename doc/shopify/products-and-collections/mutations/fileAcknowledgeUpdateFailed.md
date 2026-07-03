---
title: fileAcknowledgeUpdateFailed - GraphQL Admin
description: >-
  Acknowledges file update failure by resetting FAILED status to READY and
  clearing any media errors.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# file​Acknowledge​Update​Failed

mutation

Requires `write_files` access scope.

Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.

## Arguments

* file​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  Specifies the file(s) to acknowledge the failed updates of.

***

## File​Acknowledge​Update​Failed​Payload returns

* files

  [\[File!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  The updated file(s).

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### fileAcknowledgeUpdateFailed reference
