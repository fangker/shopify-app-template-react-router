---
title: CustomerPaymentMethod - GraphQL Admin
description: >-
  A customer's saved payment method. Stores the payment instrument details and
  billing information for recurring charges.


  The payment method supports types included in the
  [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument)
  union.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Payment​Method

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom the payment method belongs.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of this payment method.

* instrument

  [Customer​Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument)

  The instrument for this payment method.

* mandates

  [Payment​Mandate​Resource​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection)

  non-null

  The mandates associated with the payment method.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* revoked​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time that the payment method was revoked.

* revoked​Reason

  [Customer​Payment​Method​Revocation​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRevocationReason)

  The revocation reason for this payment method.

* subscription​Contracts

  [Subscription​Contract​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection)

  non-null

  List Subscription Contracts.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Map

### Fields and connections with this object

* [Customer.paymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.paymentMethods)
* [CustomerPaymentMethodConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-nodes)
* [CustomerPaymentMethodEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodEdge#field-CustomerPaymentMethodEdge.fields.node)
* [SubscriptionBillingCycleEditedContract.customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.customerPaymentMethod)
* [SubscriptionContract.customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.customerPaymentMethod)
* [SubscriptionContractBase.customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-customerPaymentMethod)
* [SubscriptionDraft.customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.customerPaymentMethod)

***

## Queries

* [customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod)

  query

  Returns a vaulted customer payment method by its ID, including the instrument type (credit card, PayPal, etc.), billing address, and current status. Optionally includes revoked payment methods. Use this to look up a specific saved payment method for a customer — for example, to check whether a subscription's payment method is still valid or to display stored payment details.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the CustomerPaymentMethod to return.

  * show​Revoked

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to show the customer's revoked payment method.

  ***

***

## CustomerPaymentMethod Queries

### Queried by

* [customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod)

***

## Mutations

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)

  mutation

  Creates a credit card payment method for a customer using a session id. These values are only obtained through card imports happening from a PCI compliant environment. Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    ### Arguments

    The billing address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID. Obtained by storing card data with Shopify's Cardsink. Exchanging raw card data for a session ID must be done in a PCI complaint environment.

  ***

* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)

  mutation

  Updates an existing vaulted credit card payment method for a customer, including billing address and card details. Requires a valid cardserver session from a PCI-compliant environment. Use this when a customer's card details have changed (e.g., new expiration date or replacement card) and ongoing subscriptions or saved payment methods need to be updated.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    ### Arguments

    The billing address.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer payment method.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID.

  ***

* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)

  mutation

  Creates a vaulted PayPal billing agreement for a customer, enabling recurring charges through PayPal. The billing agreement ID (starting with 'B-') must be obtained from PayPal. Once created, this payment method can be used for subscription billing or future order payments without requiring the customer to re-authenticate with PayPal.

  * billing​Address

    [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    ### Arguments

    The billing address.

  * billing​Agreement​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The billing agreement ID from PayPal that starts with 'B-' (for example, `B-1234XXXXX`).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer.

  * inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the PayPal billing agreement is inactive.

  ***

* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)

  mutation

  Updates the billing address associated with a customer's vaulted PayPal billing agreement. Use this when a customer's billing information has changed and their PayPal payment method record in Shopify needs to be updated accordingly.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    ### Arguments

    The billing address.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer payment method.

  ***

* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

  mutation

  Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment methods from external gateways and associates them with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects in Shopify.

  The operation processes payment methods asynchronously. The returned [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod) initially has incomplete details while Shopify validates and processes the remote gateway information. Use the [`customerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod) query to retrieve the payment method status until all details are available or the payment method is revoked.

  Learn more about [migrating customer payment methods from remote gateways](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information#step-2-import-payment-methods-for-customers).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * remote​Reference

    [Customer​Payment​Method​Remote​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput)

    required

    Remote gateway payment method details.

  ***

***

## CustomerPaymentMethod Mutations

### Mutated by

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)
* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)
* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)
* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)
* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CustomerPaymentMethod Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
