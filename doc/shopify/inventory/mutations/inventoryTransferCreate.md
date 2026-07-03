---
title: inventoryTransferCreate - GraphQL Admin
description: >-
  Creates a draft inventory transfer to move inventory items between
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  objects in your store. The transfer tracks which items to move, their

  quantities, and the origin and destination locations.


  Use
  [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)
  to mark the transfer as ready to ship.


  > Caution:

  > As of version `2026-01`, this mutation supports an optional idempotency key
  using the `@idempotent` directive.

  > As of version `2026-04`, the idempotency key is required and must be
  provided using the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Transfer​Create

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

***

**Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

***

## Arguments

* input

  [Inventory​Transfer​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput)

  required

  The input fields for the inventory transfer.

***

## Inventory​Transfer​Create​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates a draft inventory transfer

  #### Query

  ```graphql
  mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) {
    inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) {
      inventoryTransfer {
        id
        status
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
      "originLocationId": "gid://shopify/Location/346779380",
      "destinationLocationId": "gid://shopify/Location/750123840",
      "lineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "quantity": 5
        }
      ],
      "tags": [
        "some_tag",
        "another_tag"
      ],
      "dateCreated": "2021-06-03T00:00:00Z",
      "note": "Some additional notes",
      "referenceName": "a new reference name"
    },
    "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) { inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) { inventoryTransfer { id status } userErrors { field message } } }",
   "variables": {
      "input": {
        "originLocationId": "gid://shopify/Location/346779380",
        "destinationLocationId": "gid://shopify/Location/750123840",
        "lineItems": [
          {
            "inventoryItemId": "gid://shopify/InventoryItem/30322695",
            "quantity": 5
          }
        ],
        "tags": [
          "some_tag",
          "another_tag"
        ],
        "dateCreated": "2021-06-03T00:00:00Z",
        "note": "Some additional notes",
        "referenceName": "a new reference name"
      },
      "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
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
    mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) {
      inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) {
        inventoryTransfer {
          id
          status
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
              "originLocationId": "gid://shopify/Location/346779380",
              "destinationLocationId": "gid://shopify/Location/750123840",
              "lineItems": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "quantity": 5
                  }
              ],
              "tags": [
                  "some_tag",
                  "another_tag"
              ],
              "dateCreated": "2021-06-03T00:00:00Z",
              "note": "Some additional notes",
              "referenceName": "a new reference name"
          },
          "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
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
    mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) {
      inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) {
        inventoryTransfer {
          id
          status
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
      "originLocationId": "gid://shopify/Location/346779380",
      "destinationLocationId": "gid://shopify/Location/750123840",
      "lineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "quantity": 5
        }
      ],
      "tags": [
        "some_tag",
        "another_tag"
      ],
      "dateCreated": "2021-06-03T00:00:00Z",
      "note": "Some additional notes",
      "referenceName": "a new reference name"
    },
    "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) {
        inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) {
          inventoryTransfer {
            id
            status
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "originLocationId": "gid://shopify/Location/346779380",
              "destinationLocationId": "gid://shopify/Location/750123840",
              "lineItems": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "quantity": 5
                  }
              ],
              "tags": [
                  "some_tag",
                  "another_tag"
              ],
              "dateCreated": "2021-06-03T00:00:00Z",
              "note": "Some additional notes",
              "referenceName": "a new reference name"
          },
          "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) {
    inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) {
      inventoryTransfer {
        id
        status
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
      "originLocationId": "gid://shopify/Location/346779380",
      "destinationLocationId": "gid://shopify/Location/750123840",
      "lineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "quantity": 5
        }
      ],
      "tags": [
        "some_tag",
        "another_tag"
      ],
      "dateCreated": "2021-06-03T00:00:00Z",
      "note": "Some additional notes",
      "referenceName": "a new reference name"
    },
    "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation inventoryTransferCreate($input: InventoryTransferCreateInput!, $idempotencyKey: String!) {
          inventoryTransferCreate(input: $input) @idempotent(key: $idempotencyKey) {
            inventoryTransfer {
              id
              status
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
              "originLocationId": "gid://shopify/Location/346779380",
              "destinationLocationId": "gid://shopify/Location/750123840",
              "lineItems": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "quantity": 5
                  }
              ],
              "tags": [
                  "some_tag",
                  "another_tag"
              ],
              "dateCreated": "2021-06-03T00:00:00Z",
              "note": "Some additional notes",
              "referenceName": "a new reference name"
          },
          "idempotencyKey": "f1af55c3-22e3-462a-8b30-21b55e0ed5aa"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "inventoryTransferCreate": {
      "inventoryTransfer": {
        "id": "gid://shopify/InventoryTransfer/1061783053",
        "status": "DRAFT"
      },
      "userErrors": []
    }
  }
  ```

* ### inventoryTransferCreate reference
