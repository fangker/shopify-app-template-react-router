---
title: MarketingEngagement - GraphQL Admin
description: >-
  Marketing engagement represents customer activity taken on a marketing
  activity or a marketing channel.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Marketing​Engagement

object

Marketing engagement represents customer activity taken on a marketing activity or a marketing channel.

## Fields

* ad​Spend

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The total ad spend for the marketing content. Recurring weekly, monthly, or yearly spend needs to be divided into daily amounts.

* all​Conversions

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The number of all conversions from the marketing content. This field supports ad platforms that track conversions beyond traditional sales metrics. All conversions include both primary and secondary conversion goals as defined by the ad platform, such as purchases, add-to-carts, page views, and sign-ups.

* channel​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

* clicks​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of interactions, such as a button press or a screen touch, that occurred on the marketing content.

* comments​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of comments on the marketing content.

* complaints​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of complaints on the marketing content. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were marked as spam. For social media platforms, this represents the number of dislikes or the number of times marketing content was reported.

* fails​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of fails for the marketing content. For message-based platforms such as email or SMS, this represents the number of bounced marketing emails or messages.

* favorites​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of favorites, likes, saves, or bookmarks on the marketing content.

* first​Time​Customers

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The number of customers that have placed their first order. Doesn't include adjustments such as edits, exchanges, or returns.

* impressions​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of times marketing content was displayed to users, whether or not an interaction occurred. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were delivered.

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The marketing activity object related to this engagement. This corresponds to the marketingActivityId passed in on creation of the engagement.

* occurred​On

  [Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  non-null

  The calendar date (in the time zone offset specified by the utcOffset field) for which the metrics are being reported. For example, a shop in UTC-5 would set utcOffset="-05:00" and aggregate all engagements from 05:00:00Z up to 29:00:00Z (5am UTC next day) for each call.

* orders

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The number of orders generated from the marketing content.

* primary​Conversions

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The number of primary conversions from the marketing content. This field supports ad platforms that track conversions beyond traditional sales metrics. Primary conversions represent the main conversion goal defined by the ad platform, such as purchases, sign-ups, or add-to-carts.

* returning​Customers

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The number of returning customers that have placed an order. Doesn't include adjustments such as edits, exchanges, or returns.

* sales

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The amount of sales generated from the marketing content.

* sends​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of marketing emails or messages that were sent.

* sessions​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of online store sessions generated from the marketing content.

* shares​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of times marketing content was distributed or reposted to either one's own network of followers through a social media platform or other digital channels. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were forwarded.

* unique​Clicks​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of unique clicks on the marketing content.

* unique​Views​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of all users who saw marketing content since it was published. For message-based platforms such as email or SMS, this represents the number of unique users that opened a marketing email or message. For video-based content, this represents the number of unique users that played video content.

* unsubscribes​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of unsubscribes on the marketing content. For social media platforms, this represents the number of unfollows.

* utc​Offset

  [Utc​Offset!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UtcOffset)

  non-null

  The UTC offset for the time zone in which the metrics are being reported, in the format `"+HH:MM"` or `"-HH:MM"`. Used in combination with occurredOn when aggregating daily metrics. Must match the account settings for the shop to minimize eventual discrepancies in reporting.

* views​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of views on the marketing content. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were opened. For video-based content, this represents the number of times videos were played.

* is​Cumulative

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

***

## Map

No referencing types

***

## Mutations

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)

  mutation

  Creates a new marketing engagement for a marketing activity or a marketing channel.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * marketing​Engagement

    [Marketing​Engagement​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput)

    required

    The marketing engagement's attributes.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  ***

***

## MarketingEngagement Mutations

### Mutated by

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)
