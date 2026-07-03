---
title: AppFeedback - GraphQL Admin
description: >-
  Reports the status of shops and their resources and displays this information

  within Shopify admin. AppFeedback is used to notify merchants about steps they
  need to take

  to set up an app on their store.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Feedback

object

Reports the status of shops and their resources and displays this information within Shopify admin. AppFeedback is used to notify merchants about steps they need to take to set up an app on their store.

## Fields

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The application associated to the feedback.

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  The channel this feedback is for.

* feedback​Generated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the app feedback was generated.

* link

  [Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/Link)

  A link to where merchants can resolve errors.

* messages

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The feedback message presented to the merchant.

* state

  [Resource​Feedback​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState)

  non-null

  Conveys the state of the feedback and whether it requires merchant action or not.

***

## Map

### Fields with this object

* [App.feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.feedback)
* [Channel.resourceFeedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.resourceFeedback)
* [ResourceFeedback.details](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback#field-ResourceFeedback.fields.details)

***

## Mutations

* [shop​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)

  mutation

  The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

  Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

  This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

  ## Sending feedback on a shop

  You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `REQUIRES_ACTION` or `ACCEPTED`. You need to send a `REQUIRES_ACTION` feedback request for each step that the merchant is required to complete.

  If there are multiple set-up steps that require merchant action, then send feedback with a state of `REQUIRES_ACTION` as merchants complete prior steps. When all required actions are resolved, send an `ACCEPTED` feedback request to clear the active feedback signal.

  ### Clearing feedback with ACCEPTED

  Sending `state: ACCEPTED` removes the active feedback entry. After this mutation succeeds, reading `channel.resourceFeedback`, `app.feedback`, or the `feedback` field on this payload may return `null`—this is expected behavior, not a mutation failure. A `null` result means no outstanding feedback exists for the channel.

  ### Important

  Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

  * input

    [Resource​Feedback​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput)

    required

    ### Arguments

    The fields required to create shop feedback.

  ***

***

## AppFeedback Mutations

### Mutated by

* [shop​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)
