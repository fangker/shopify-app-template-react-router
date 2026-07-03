---
title: customerMerge - GraphQL Admin
description: >-
  Merges two customers.


  The `customerOneId` and `customerTwoId` arguments don't guarantee which
  customer is kept. Shopify

  selects the resulting customer in this order:

  1. If `overrideFields.customerIdOfEmailToKeep` is provided and valid, then the
  selected customer is kept.

  2. If exactly one customer has an email address, then that customer is kept.

  3. If both customers have email addresses, then account state and email
  marketing consent determine
     the customer that's kept: an `enabled` account wins over other account states; otherwise, an
     `invited` account can win when consent doesn't already prefer `subscribed` or `pending`; otherwise
     the consent result is used. If those rules don't prefer either customer, then `customerTwoId` is kept.
  4. If neither customer has an email address, then `customerTwoId` is kept.


  Use `customerMergePreview` and `resultingCustomerId` to check which customer
  will be kept before merging.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# customer​Merge

mutation

Requires `write_customer_merge` access scope.

Merges two customers.

The `customerOneId` and `customerTwoId` arguments don't guarantee which customer is kept. Shopify selects the resulting customer in this order:

1. If `overrideFields.customerIdOfEmailToKeep` is provided and valid, then the selected customer is kept.
2. If exactly one customer has an email address, then that customer is kept.
3. If both customers have email addresses, then account state and email marketing consent determine the customer that's kept: an `enabled` account wins over other account states; otherwise, an `invited` account can win when consent doesn't already prefer `subscribed` or `pending`; otherwise the consent result is used. If those rules don't prefer either customer, then `customerTwoId` is kept.
4. If neither customer has an email address, then `customerTwoId` is kept.

Use `customerMergePreview` and `resultingCustomerId` to check which customer will be kept before merging.

## Arguments

* customer​One​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of one customer to merge. This customer isn't guaranteed to be kept.

* customer​Two​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of another customer to merge. This customer is kept when neither customer has an email address.

* override​Fields

  [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

  The field-specific overrides for default customer merge rules.

***

## Customer​Merge​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for merging the customers.

* resulting​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer that's kept after the merge. Treat this ID as authoritative.

* user​Errors

  [\[Customer​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Merge customers with override fields

  #### Description

  Merge customers with override fields.

  #### Query

  ```graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\", overrideFields: {customerIdOfFirstNameToKeep: \"gid://shopify/Customer/544365967\", customerIdOfLastNameToKeep: \"gid://shopify/Customer/624407574\"}) { resultingCustomerId job { id done } userErrors { code field message } } }",
   "variables": {
      "customerOneId": "gid://shopify/Customer/544365967",
      "customerTwoId": "gid://shopify/Customer/624407574",
      "overrideFields": {
        "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
        "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
      }
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574",
          "overrideFields": {
              "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
              "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
          }
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CustomerMerge {
        customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
          resultingCustomerId
          job {
            id
            done
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574",
          "overrideFields": {
              "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
              "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation CustomerMerge {
          customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
            resultingCustomerId
            job {
              id
              done
            }
            userErrors {
              code
              field
              message
            }
          }
        }
      `,
      variables: {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574",
          "overrideFields": {
              "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
              "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
          }
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "customerMerge": {
      "resultingCustomerId": "gid://shopify/Customer/624407574",
      "job": {
        "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
        "done": true
      },
      "userErrors": []
    }
  }
  ```

* ### Merge two customers

  #### Description

  Merge two customers.

  #### Query

  ```graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\") { resultingCustomerId job { id done } userErrors { code field message } } }",
   "variables": {
      "customerOneId": "gid://shopify/Customer/544365967",
      "customerTwoId": "gid://shopify/Customer/624407574"
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574"
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CustomerMerge {
        customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
          resultingCustomerId
          job {
            id
            done
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation CustomerMerge {
          customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
            resultingCustomerId
            job {
              id
              done
            }
            userErrors {
              code
              field
              message
            }
          }
        }
      `,
      variables: {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "customerMerge": {
      "resultingCustomerId": "gid://shopify/Customer/624407574",
      "job": {
        "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
        "done": true
      },
      "userErrors": []
    }
  }
  ```

* ### customerMerge reference
