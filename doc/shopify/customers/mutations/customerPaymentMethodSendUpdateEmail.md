---
title: customerPaymentMethodSendUpdateEmail - GraphQL Admin
description: >-
  Sends an email to a customer containing a secure link to update a specific

  vaulted payment method. This is commonly used when a customer's credit card is

  expiring or has been declined, and they need to provide updated payment

  details for ongoing subscriptions. The email can be customized with sender and
  BCC fields.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# customer​Payment​Method​Send​Update​Email

mutation

Requires `write_customers` access scope.

Sends an email to a customer containing a secure link to update a specific vaulted payment method. This is commonly used when a customer's credit card is expiring or has been declined, and they need to provide updated payment details for ongoing subscriptions. The email can be customized with sender and BCC fields.

## Arguments

* customer​Payment​Method​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The payment method to be updated.

* email

  [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

  Specifies the payment method update email fields. Only the 'from' and 'bcc' fields are accepted for input.

***

## Customer​Payment​Method​Send​Update​Email​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom an update payment method email was sent.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Send an email with only the customer payment method id

  #### Query

  ```graphql
  mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
    customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
      customer {
        id
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
    "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) { customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) { customer { id } userErrors { field message } } }",
   "variables": {
      "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
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
    mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
      customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
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
    mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
      customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
        customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
          customer {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
    customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
          customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
            customer {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "customerPaymentMethodSendUpdateEmail": {
      "customer": {
        "id": "gid://shopify/Customer/544365967"
      },
      "userErrors": []
    }
  }
  ```

* ### customerPaymentMethodSendUpdateEmail reference
