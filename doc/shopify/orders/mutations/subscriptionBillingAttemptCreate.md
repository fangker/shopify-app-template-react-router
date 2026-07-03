---
title: subscriptionBillingAttemptCreate - GraphQL Admin
description: >-
  Creates a billing attempt to charge for a
  [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

  The mutation processes either the payment for the current billing cycle or for

  a specific cycle, if selected.


  The mutation creates an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  when successful. Failed billing attempts include a
  [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError)

  field with error details.


  > Tip:

  > Use the
  [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey)
  to ensure the billing attempt executes only once, preventing duplicate charges

  if the request is retried.


  You can target a specific billing cycle using the
  [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector)

  to bill past or future cycles. The
  [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime)

  parameter adjusts fulfillment scheduling for attempts completed after the

  expected billing date.


  Learn more about [creating billing
  attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# subscription​Billing​Attempt​Create

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The mutation processes either the payment for the current billing cycle or for a specific cycle, if selected.

The mutation creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) when successful. Failed billing attempts include a [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError) field with error details.

***

**Tip:** Use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey">\<code>\<span class="PreventFireFoxApplyingGapToWBR">idempotency\<wbr/>Key\</span>\</code>\</a> to ensure the billing attempt executes only once, preventing duplicate charges if the request is retried.

***

You can target a specific billing cycle using the [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector) to bill past or future cycles. The [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime) parameter adjusts fulfillment scheduling for attempts completed after the expected billing date.

Learn more about [creating billing attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).

## Arguments

* subscription​Billing​Attempt​Input

  [Subscription​Billing​Attempt​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput)

  required

  The information to apply as a billing attempt.

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the subscription contract.

***

## Subscription​Billing​Attempt​Create​Payload returns

* subscription​Billing​Attempt

  [Subscription​Billing​Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  The subscription billing attempt.

* user​Errors

  [\[Billing​Attempt​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a billing attempt on a specific billing cycle

  #### Description

  Creates a billing attempt on the billing cycle with cycle index \`1\`.

  #### Query

  ```graphql
  mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
    subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
      subscriptionBillingAttempt {
        id
        ready
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "index": 1
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) { subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: \"aaa-bbb-ccc\", originTime: \"2020-10-01T10:00:00Z\"}) { subscriptionBillingAttempt { id ready } userErrors { field message } } }",
   "variables": {
      "contractId": "gid://shopify/SubscriptionContract/593791907",
      "index": 1
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
      subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
        subscriptionBillingAttempt {
          id
          ready
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "index": 1
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
      subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
        subscriptionBillingAttempt {
          id
          ready
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "index": 1
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
        subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
          subscriptionBillingAttempt {
            id
            ready
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "index": 1
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
    subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
      subscriptionBillingAttempt {
        id
        ready
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "index": 1
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation subscriptionBillingAttemptCreate($contractId: ID!, $index: Int!) {
          subscriptionBillingAttemptCreate(subscriptionContractId: $contractId, subscriptionBillingAttemptInput: {billingCycleSelector: {index: $index}, idempotencyKey: "aaa-bbb-ccc", originTime: "2020-10-01T10:00:00Z"}) {
            subscriptionBillingAttempt {
              id
              ready
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "index": 1
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "subscriptionBillingAttemptCreate": {
      "subscriptionBillingAttempt": {
        "id": "gid://shopify/SubscriptionBillingAttempt/528177097",
        "ready": false
      },
      "userErrors": []
    }
  }
  ```

* ### subscriptionBillingAttemptCreate reference
