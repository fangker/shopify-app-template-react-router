---
title: inventoryTransferCreateAsReadyToShip - GraphQL Admin
description: >-
  Creates an inventory transfer in ready to ship.


  > Caution:

  > As of 2026-01, this mutation supports an optional idempotency key using the
  `@idempotent` directive.

  > As of 2026-04, the idempotency key is required and must be provided using
  the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Transfer​Create​As​Ready​To​Ship

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

Creates an inventory transfer in ready to ship.

***

**Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

***

## Arguments

* input

  [Inventory​Transfer​Create​As​Ready​To​Ship​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

  required

  The input fields for the inventory transfer.

***

## Inventory​Transfer​Create​As​Ready​To​Ship​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​As​Ready​To​Ship​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates a ready-to-ship inventory transfer

  #### Query

  ```graphql
  mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) {
    inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) {
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
    "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) { inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) { inventoryTransfer { id status } userErrors { field message } } }",
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
      "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
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
    mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) {
      inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) {
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
          "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
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
    mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) {
      inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) {
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
    "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) {
        inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) {
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
          "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) {
    inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) {
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
    "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!, $idempotencyKey: String!) {
          inventoryTransferCreateAsReadyToShip(input: $input) @idempotent(key: $idempotencyKey) {
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
          "idempotencyKey": "edd239f7-2ad0-4a58-b8ad-12dd98d3cc5b"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "inventoryTransferCreateAsReadyToShip": {
      "inventoryTransfer": {
        "id": "gid://shopify/InventoryTransfer/1061783096",
        "status": "READY_TO_SHIP"
      },
      "userErrors": []
    }
  }
  ```

* ### inventoryTransferCreateAsReadyToShip reference
