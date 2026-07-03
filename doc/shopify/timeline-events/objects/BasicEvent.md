---
title: BasicEvent - GraphQL Admin
description: "Basic events chronicle resource activities such as the creation of an article, the fulfillment of an order, or\nthe addition of a product.\n\n### General events\n\n| Action | Description  |\n|---|---|\n| `create` | The item was created. |\n| `destroy` | The item was destroyed. |\n| `published` | The item was published. |\n| `unpublished` | The item was unpublished. |\n| `update` | The item was updated.  |\n\n### Order events\n\nOrder events can be divided into the following categories:\n\n- *Authorization*: Includes whether the authorization succeeded, failed, or is pending.\n- *Capture*: Includes whether the capture succeeded, failed, or is pending.\n- *Email*: Includes confirmation or cancellation of the order, as well as shipping.\n- *Fulfillment*: Includes whether the fulfillment succeeded, failed, or is\npending. Also includes cancellation, restocking, and fulfillment updates.\n- *Order*: Includess the placement, confirmation, closing, re-opening, and cancellation of the order.\n- *Refund*: Includes whether the refund succeeded, failed, or is pending.\n- *Sale*: Includes whether the sale succeeded, failed, or is pending.\n- *Void*: Includes whether the void succeeded, failed, or is pending.\n\n| Action  | Message  | Description  |\n|---|---|---|\n| `authorization_failure` | The customer, unsuccessfully, tried to authorize:\n`{money_amount}`. | Authorization failed. The funds cannot be captured. |\n| `authorization_pending` | Authorization for `{money_amount}` is pending. | Authorization pending. |\n| `authorization_success` | The customer successfully authorized us to capture:\n`{money_amount}`. | Authorization was successful and the funds are available for capture. |\n| `cancelled` | Order was cancelled by `{shop_staff_name}`. | The order was cancelled. |\n| `capture_failure` | We failed to capture: `{money_amount}`. | The capture\nfailed. The funds cannot be transferred to the shop. |\n| `capture_pending` | Capture for `{money_amount}` is pending. | The capture is\nin process. The funds are not yet available to the shop. |\n| `capture_success` | We successfully captured: `{money_amount}` | The capture\nwas successful and the funds are now available to the shop. |\n| `closed` | Order was closed. | The order was closed. |\n| `confirmed` | Received a new order: `{order_number}` by `{customer_name}`. | The order was confirmed. |\n| `fulfillment_cancelled` | We cancelled `{number_of_line_items}` from being\nfulfilled by the third party fulfillment service. | Fulfillment for one or more\nof the line_items failed. |\n| `fulfillment_pending` | We submitted `{number_of_line_items}` to the third\nparty service. | One or more of the line_items has been assigned to a third\nparty service for fulfillment. |\n| `fulfillment_success` | We successfully fulfilled line_items. | Fulfillment was successful for one or more line_items. |\n| `mail_sent` | `{message_type}` email was sent to the customer. | An email was sent to the customer. |\n| `placed` | Order was placed. | An order was placed by the customer. |\n| `re_opened` | Order was re-opened. | An order was re-opened. |\n| `refund_failure` | We failed to refund `{money_amount}`. | The refund failed. The funds are still with the shop. |\n| `refund_pending` | Refund of `{money_amount}` is still pending. | The refund\nis in process. The funds are still with shop. |\n| `refund_success` | We successfully refunded `{money_amount}`. | The refund was\nsuccessful. The funds have been transferred to the customer. |\n| `restock_line_items` | We restocked `{number_of_line_items}`. |\tOne or more of\nthe order's line items have been restocked. |\n| `sale_failure` | The customer failed to pay `{money_amount}`. | The sale\nfailed. The funds are not available to the shop. |\n| `sale_pending` | The `{money_amount}` is pending. | The sale is in process. The funds are not yet available to the shop. |\n| `sale_success` | We successfully captured `{money_amount}`. | The sale was successful. The funds are now with the shop. |\n| `update` | `{order_number}` was updated. | The order was updated. |\n| `void_failure` | We failed to void the authorization. | Voiding the\nauthorization failed. The authorization is still valid. |\n| `void_pending` | Authorization void is pending. | Voiding the authorization is\nin process. The authorization is still valid. |\n| `void_success` | We successfully voided the authorization. | Voiding the\nauthorization was successful. The authorization is no longer valid. |"
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Basic​Event

object

Basic events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the addition of a product.

### General events

| Action | Description |
| - | - |
| `create` | The item was created. |
| `destroy` | The item was destroyed. |
| `published` | The item was published. |
| `unpublished` | The item was unpublished. |
| `update` | The item was updated. |

### Order events

Order events can be divided into the following categories:

* *Authorization*: Includes whether the authorization succeeded, failed, or is pending.
* *Capture*: Includes whether the capture succeeded, failed, or is pending.
* *Email*: Includes confirmation or cancellation of the order, as well as shipping.
* *Fulfillment*: Includes whether the fulfillment succeeded, failed, or is pending. Also includes cancellation, restocking, and fulfillment updates.
* *Order*: Includess the placement, confirmation, closing, re-opening, and cancellation of the order.
* *Refund*: Includes whether the refund succeeded, failed, or is pending.
* *Sale*: Includes whether the sale succeeded, failed, or is pending.
* *Void*: Includes whether the void succeeded, failed, or is pending.

| Action | Message | Description |
| - | - | - |
| `authorization_failure` | The customer, unsuccessfully, tried to authorize: | |
| `{money_amount}`. | Authorization failed. The funds cannot be captured. | |
| `authorization_pending` | Authorization for `{money_amount}` is pending. | Authorization pending. |
| `authorization_success` | The customer successfully authorized us to capture: | |
| `{money_amount}`. | Authorization was successful and the funds are available for capture. | |
| `cancelled` | Order was cancelled by `{shop_staff_name}`. | The order was cancelled. |
| `capture_failure` | We failed to capture: `{money_amount}`. | The capture |
| failed. The funds cannot be transferred to the shop. | | |
| `capture_pending` | Capture for `{money_amount}` is pending. | The capture is |
| in process. The funds are not yet available to the shop. | | |
| `capture_success` | We successfully captured: `{money_amount}` | The capture |
| was successful and the funds are now available to the shop. | | |
| `closed` | Order was closed. | The order was closed. |
| `confirmed` | Received a new order: `{order_number}` by `{customer_name}`. | The order was confirmed. |
| `fulfillment_cancelled` | We cancelled `{number_of_line_items}` from being | |
| fulfilled by the third party fulfillment service. | Fulfillment for one or more | |
| of the line\_items failed. | | |
| `fulfillment_pending` | We submitted `{number_of_line_items}` to the third | |
| party service. | One or more of the line\_items has been assigned to a third | |
| party service for fulfillment. | | |
| `fulfillment_success` | We successfully fulfilled line\_items. | Fulfillment was successful for one or more line\_items. |
| `mail_sent` | `{message_type}` email was sent to the customer. | An email was sent to the customer. |
| `placed` | Order was placed. | An order was placed by the customer. |
| `re_opened` | Order was re-opened. | An order was re-opened. |
| `refund_failure` | We failed to refund `{money_amount}`. | The refund failed. The funds are still with the shop. |
| `refund_pending` | Refund of `{money_amount}` is still pending. | The refund |
| is in process. The funds are still with shop. | | |
| `refund_success` | We successfully refunded `{money_amount}`. | The refund was |
| successful. The funds have been transferred to the customer. | | |
| `restock_line_items` | We restocked `{number_of_line_items}`. | One or more of |
| the order's line items have been restocked. | | |
| `sale_failure` | The customer failed to pay `{money_amount}`. | The sale |
| failed. The funds are not available to the shop. | | |
| `sale_pending` | The `{money_amount}` is pending. | The sale is in process. The funds are not yet available to the shop. |
| `sale_success` | We successfully captured `{money_amount}`. | The sale was successful. The funds are now with the shop. |
| `update` | `{order_number}` was updated. | The order was updated. |
| `void_failure` | We failed to void the authorization. | Voiding the |
| authorization failed. The authorization is still valid. | | |
| `void_pending` | Authorization void is pending. | Voiding the authorization is |
| in process. The authorization is still valid. | | |
| `void_success` | We successfully voided the authorization. | Voiding the |
| authorization was successful. The authorization is no longer valid. | | |

## Fields

* action

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The action that occured.

* additional​Content

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  Provides additional content for collapsible timeline events.

* additional​Data

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  Provides additional data for event consumers.

* app​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the app that created the event.

* arguments

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  Refers to a certain event and its resources.

* attribute​To​App

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was created by an app.

* attribute​To​User

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was caused by an admin user.

* author

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The entity which performed the action that generated the event.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the event was created.

* critical​Alert

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event is critical.

* has​Additional​Content

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this event has additional content.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* message

  [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  non-null

  Human readable text that describes the event.

* secondary​Message

  [Formatted​String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  Human readable text that supports the event message.

* subject

  [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

  The resource that generated the event. To see a list of possible types, refer to [HasEvents](https://shopify.dev/docs/api/admin-graphql/unstable/interfaces/HasEvents#implemented-in).

* subject​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the resource that generated the event.

* subject​Type

  [Event​Subject​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSubjectType)

  non-null

  The type of the resource that generated the event.

***

## Map

No referencing types

***

## Interfaces

* * [Event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## BasicEvent Implements

### Implements

* [Event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
