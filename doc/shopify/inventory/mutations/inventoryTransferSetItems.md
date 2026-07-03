---
title: inventoryTransferSetItems - GraphQL Admin
description: >-
  This mutation sets the quantity for one or more line items on a Transfer.


  Only the items you include in the `lineItems` field are updated. Items already
  on

  the transfer but not referenced in your update will stay unchanged. Each
  inventory

  item may appear at most once in `lineItems`; duplicate `inventoryItemId`
  entries

  are rejected.


  For each entry in `lineItems`:

  - If the inventory item isn't yet on the transfer, a new line item is added
  with
    the provided quantity.
  - If the inventory item is already on the transfer, the provided quantity
    replaces the line item's [`processableQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem#field-InventoryTransferLineItem.fields.processableQuantity).
    Any quantity outside the processable portion (for example, already shipped or
    picked for shipment) is preserved, so the resulting total quantity equals the
    preserved portion plus the provided quantity.

  Passing a quantity of `0` is only allowed for transfers in `DRAFT` status; on

  `READY_TO_SHIP` or `IN_PROGRESS` transfers it returns an `INVALID_QUANTITY`
  error.

  On `DRAFT` transfers, `quantity: 0` leaves a zero-quantity line item on the

  transfer; it does not remove the item. To remove a line item from a transfer,
  use

  [`inventoryTransferRemoveItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems).


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Transfer​Set​Items

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

This mutation sets the quantity for one or more line items on a Transfer.

Only the items you include in the `lineItems` field are updated. Items already on the transfer but not referenced in your update will stay unchanged. Each inventory item may appear at most once in `lineItems`; duplicate `inventoryItemId` entries are rejected.

For each entry in `lineItems`:

* If the inventory item isn't yet on the transfer, a new line item is added with the provided quantity.
* If the inventory item is already on the transfer, the provided quantity replaces the line item's [`processableQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem#field-InventoryTransferLineItem.fields.processableQuantity). Any quantity outside the processable portion (for example, already shipped or picked for shipment) is preserved, so the resulting total quantity equals the preserved portion plus the provided quantity.

Passing a quantity of `0` is only allowed for transfers in `DRAFT` status; on `READY_TO_SHIP` or `IN_PROGRESS` transfers it returns an `INVALID_QUANTITY` error. On `DRAFT` transfers, `quantity: 0` leaves a zero-quantity line item on the transfer; it does not remove the item. To remove a line item from a transfer, use [`inventoryTransferRemoveItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems).

***

**Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

***

## Arguments

* input

  [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

  required

  The input fields for the InventoryTransferSetItems mutation.

***

## Inventory​Transfer​Set​Items​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The Transfer with its line items updated.

* updated​Line​Items

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The updated line items.

* user​Errors

  [\[Inventory​Transfer​Set​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Sets items on a transfer

  #### Query

  ```graphql
  mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) {
    inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) {
      inventoryTransfer {
        id
      }
      updatedLineItems {
        inventoryItemId
        newQuantity
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "id": "gid://shopify/InventoryTransfer/1061783017",
      "lineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/498744621",
          "quantity": 2
        }
      ]
    },
    "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) { inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) { inventoryTransfer { id } updatedLineItems { inventoryItemId newQuantity } userErrors { field message code } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/InventoryTransfer/1061783017",
        "lineItems": [
          {
            "inventoryItemId": "gid://shopify/InventoryItem/498744621",
            "quantity": 2
          }
        ]
      },
      "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
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
    mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) {
      inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) {
        inventoryTransfer {
          id
        }
        updatedLineItems {
          inventoryItemId
          newQuantity
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/InventoryTransfer/1061783017",
              "lineItems": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/498744621",
                      "quantity": 2
                  }
              ]
          },
          "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
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
    mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) {
      inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) {
        inventoryTransfer {
          id
        }
        updatedLineItems {
          inventoryItemId
          newQuantity
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/InventoryTransfer/1061783017",
      "lineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/498744621",
          "quantity": 2
        }
      ]
    },
    "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) {
        inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) {
          inventoryTransfer {
            id
          }
          updatedLineItems {
            inventoryItemId
            newQuantity
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/InventoryTransfer/1061783017",
              "lineItems": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/498744621",
                      "quantity": 2
                  }
              ]
          },
          "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) {
    inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) {
      inventoryTransfer {
        id
      }
      updatedLineItems {
        inventoryItemId
        newQuantity
      }
      userErrors {
        field
        message
        code
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "id": "gid://shopify/InventoryTransfer/1061783017",
      "lineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/498744621",
          "quantity": 2
        }
      ]
    },
    "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!, $idempotencyKey: String!) {
          inventoryTransferSetItems(input: $input) @idempotent(key: $idempotencyKey) {
            inventoryTransfer {
              id
            }
            updatedLineItems {
              inventoryItemId
              newQuantity
            }
            userErrors {
              field
              message
              code
            }
          }
        }
      `,
      variables: {
          "input": {
              "id": "gid://shopify/InventoryTransfer/1061783017",
              "lineItems": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/498744621",
                      "quantity": 2
                  }
              ]
          },
          "idempotencyKey": "7bbaca75-549a-4e96-90ce-a479854dbf92"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "inventoryTransferSetItems": {
      "inventoryTransfer": {
        "id": "gid://shopify/InventoryTransfer/1061783017"
      },
      "updatedLineItems": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/498744621",
          "newQuantity": 2
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### inventoryTransferSetItems reference
