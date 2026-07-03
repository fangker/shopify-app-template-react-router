---
title: privacyFeaturesDisable - GraphQL Admin
description: Disable a shop's privacy features.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# privacy​Features​Disable

mutation

Requires `write_privacy_settings` access scope.

Disable a shop's privacy features.

## Arguments

* features​To​Disable

  [\[Privacy​Features​Enum!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

  required

  The list of privacy features to disable.

***

## Privacy​Features​Disable​Payload returns

* features​Disabled

  [\[Privacy​Features​Enum!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

  The privacy features that were disabled.

* user​Errors

  [\[Privacy​Features​Disable​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### privacyFeaturesDisable reference
