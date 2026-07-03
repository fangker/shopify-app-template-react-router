---
title: MailingAddress - GraphQL Admin
description: >-
  A physical mailing address. For example, a
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s

  default address and an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)'s

  billing address are both mailing addresses. Stores standard address
  components,

  customer name information, and company details.


  The address includes geographic coordinates
  ([`latitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.latitude)
  and
  [`longitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)).

  You can format addresses for display using the
  [`formatted`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.formatted)

  field with options to include or exclude name and company information.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Mailing​Address

object

A physical mailing address. For example, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s default address and an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)'s billing address are both mailing addresses. Stores standard address components, customer name information, and company details.

The address includes geographic coordinates ([`latitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.latitude) and [`longitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)). You can format addresses for display using the [`formatted`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.formatted) field with options to include or exclude name and company information.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the customer's company or organization.

* coordinates​Validated

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the address corresponds to recognized latitude and longitude values.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the country.

* country​Code​V2

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The two-letter code for the country of the address.

  For example, US.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the customer.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A formatted version of the address, customized by the provided arguments.

  * with​Company

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to include the customer's company in the formatted address.

  * with​Name

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the customer's name in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A comma-separated list of the values for city, province, and country.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the customer.

* latitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The latitude coordinate of the customer address.

* longitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The longitude coordinate of the customer address.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The full name of the customer, based on firstName and lastName.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique phone number for the customer.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alphanumeric code for the region.

  For example, ON.

* time​Zone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The time zone of the address.

* validation​Result​Summary

  [Mailing​Address​Validation​Result](https://shopify.dev/docs/api/admin-graphql/latest/enums/MailingAddressValidationResult)

  The validation status that's leveraged by the address validation feature in the Shopify Admin. See ["Validating addresses in your Shopify admin"](https://help.shopify.com/manual/fulfillment/managing-orders/validating-order-address) for more details.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

* country​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

### Fields and connections with this object

* [AbandonedCheckout.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.billingAddress)
* [AbandonedCheckout.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.shippingAddress)
* [Customer.addressesV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.addressesV2)
* [Customer.defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.defaultAddress)
* [CustomerMergePreviewAlternateFields.defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields#field-CustomerMergePreviewAlternateFields.fields.defaultAddress)
* [CustomerMergePreviewDefaultFields.addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.addresses)
* [CustomerMergePreviewDefaultFields.defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.defaultAddress)
* [CustomerSegmentMember.defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.defaultAddress)
* [DraftOrder.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.billingAddress)
* [DraftOrder.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.shippingAddress)
* [MailingAddressConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-nodes)
* [MailingAddressEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddressEdge#field-MailingAddressEdge.fields.node)
* [Order.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.billingAddress)
* [Order.displayAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayAddress)
* [Order.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.shippingAddress)
* [ShopifyPaymentsDisputeEvidence.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.billingAddress)
* [ShopifyPaymentsDisputeEvidence.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.shippingAddress)
* [SubscriptionDeliveryMethodLocalDelivery.address](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDelivery#field-SubscriptionDeliveryMethodLocalDelivery.fields.address)
* [SubscriptionDeliveryMethodShipping.address](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShipping#field-SubscriptionDeliveryMethodShipping.fields.address)

***

## Mutations

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)

  mutation

  Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer). You can optionally set the address as the customer's default address.

  You can only add addresses to existing customers. Each customer can have multiple addresses.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    ### Arguments

    Specifies the fields to use when creating the address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress). You can modify any field of the address and optionally set it as the customer's default address.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    ### Arguments

    Specifies the fields to use when updating the address.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to update.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer whose address is being updated.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

***

## MailingAddress Mutations

### Mutated by

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)
* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## MailingAddress Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
