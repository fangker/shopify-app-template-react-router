---
title: collectionConditionsSourceUpdate - GraphQL Admin
description: Updates a shareable collection source owned by the calling app.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# collection​Conditions​Source​Update

mutation

Requires `write_products` access scope. Also: The app must have access to the input fields used to update a collection source. Further, the store must not be on the Starter or Retail plans and the user must have permission to manage products.

Updates a shareable collection source owned by the calling app.

## Arguments

* input

  [Collection​Update​Conditions​Source​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUpdateConditionsSourceInput)

  required

  The input fields for the source to update.

***

## Collection​Conditions​Source​Update​Payload returns

* source

  [Collection​Conditions​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource)

  The updated collection source.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update a shareable collection source

  #### Description

  Update the details of a shareable collection source owned by the calling app.

  #### Query

  ```graphql
  mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) {
    collectionConditionsSourceUpdate(input: $input) {
      source {
        id
        title
        description
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
    "input": {
      "id": "gid://shopify/CollectionConditionsSource/129168209",
      "title": "Updated spring source",
      "description": "Updated products to include in spring collections."
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
  "query": "mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) { collectionConditionsSourceUpdate(input: $input) { source { id title description } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/CollectionConditionsSource/129168209",
        "title": "Updated spring source",
        "description": "Updated products to include in spring collections."
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
    mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) {
      collectionConditionsSourceUpdate(input: $input) {
        source {
          id
          title
          description
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/CollectionConditionsSource/129168209",
              "title": "Updated spring source",
              "description": "Updated products to include in spring collections."
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
    mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) {
      collectionConditionsSourceUpdate(input: $input) {
        source {
          id
          title
          description
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/CollectionConditionsSource/129168209",
      "title": "Updated spring source",
      "description": "Updated products to include in spring collections."
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) {
        collectionConditionsSourceUpdate(input: $input) {
          source {
            id
            title
            description
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/CollectionConditionsSource/129168209",
              "title": "Updated spring source",
              "description": "Updated products to include in spring collections."
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) {
    collectionConditionsSourceUpdate(input: $input) {
      source {
        id
        title
        description
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "id": "gid://shopify/CollectionConditionsSource/129168209",
      "title": "Updated spring source",
      "description": "Updated products to include in spring collections."
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation CollectionConditionsSourceUpdate($input: CollectionUpdateConditionsSourceInput!) {
          collectionConditionsSourceUpdate(input: $input) {
            source {
              id
              title
              description
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "input": {
              "id": "gid://shopify/CollectionConditionsSource/129168209",
              "title": "Updated spring source",
              "description": "Updated products to include in spring collections."
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
    "collectionConditionsSourceUpdate": {
      "source": {
        "id": "gid://shopify/CollectionConditionsSource/129168209",
        "title": "Updated spring source",
        "description": "Updated products to include in spring collections."
      },
      "userErrors": []
    }
  }
  ```

* ### collectionConditionsSourceUpdate reference
