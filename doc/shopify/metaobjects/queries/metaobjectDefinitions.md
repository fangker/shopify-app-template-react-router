---
title: metaobjectDefinitions - GraphQL Admin
description: >-
  Returns a paginated list of all
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  objects configured for the store. Metaobject definitions provide the schema

  for creating custom data structures composed of individual fields. Each

  definition specifies the field types, access permissions, and capabilities for
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  entries of that type. Use this query to discover available metaobject types

  before creating or querying metaobject entries.


  Learn more about [managing
  metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# metaobject​Definitions

query

Requires `read_metaobject_definitions` access scope.

Returns a paginated list of all [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) objects configured for the store. Metaobject definitions provide the schema for creating custom data structures composed of individual fields. Each definition specifies the field types, access permissions, and capabilities for [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of that type. Use this query to discover available metaobject types before creating or querying metaobject entries.

Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

## MetaobjectDefinitionConnection arguments

[MetaobjectDefinitionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection)

* after

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

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

## Possible returns

* edges

  [\[Metaobject​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metaobject​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  non-null

  A list of nodes that are contained in MetaobjectDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Examples

* ### Fetch all metaobject definitions

  #### Description

  Retrieves a paginated list of metaobject definitions for the shop.

  #### Query

  ```graphql
  query MetaobjectDefinitions($cursor: String) {
    metaobjectDefinitions(first: 10, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        name
        type
        fieldDefinitions {
          key
          name
          type {
            name
          }
        }
      }
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
  "query": "query MetaobjectDefinitions($cursor: String) { metaobjectDefinitions(first: 10, after: $cursor) { pageInfo { hasNextPage endCursor } nodes { id name type fieldDefinitions { key name type { name } } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query MetaobjectDefinitions($cursor: String) {
      metaobjectDefinitions(first: 10, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          type
          fieldDefinitions {
            key
            name
            type {
              name
            }
          }
        }
      }
    }`,
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
    query MetaobjectDefinitions($cursor: String) {
      metaobjectDefinitions(first: 10, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          type
          fieldDefinitions {
            key
            name
            type {
              name
            }
          }
        }
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query MetaobjectDefinitions($cursor: String) {
      metaobjectDefinitions(first: 10, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          type
          fieldDefinitions {
            key
            name
            type {
              name
            }
          }
        }
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query MetaobjectDefinitions($cursor: String) {
    metaobjectDefinitions(first: 10, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        name
        type
        fieldDefinitions {
          key
          name
          type {
            name
          }
        }
      }
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query MetaobjectDefinitions($cursor: String) {
          metaobjectDefinitions(first: 10, after: $cursor) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              id
              name
              type
              fieldDefinitions {
                key
                name
                type {
                  name
                }
              }
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "metaobjectDefinitions": {
      "pageInfo": {
        "hasNextPage": true,
        "endCursor": "eyJsYXN0X2lkIjo3MTA3NjM1MTMsImxhc3RfdmFsdWUiOiI3MTA3NjM1MTMifQ=="
      },
      "nodes": [
        {
          "id": "gid://shopify/MetaobjectDefinition/207838610",
          "name": "Localizable",
          "type": "localizable",
          "fieldDefinitions": [
            {
              "key": "money",
              "name": "Money",
              "type": {
                "name": "money"
              }
            },
            {
              "key": "single_line",
              "name": "Single Line",
              "type": {
                "name": "single_line_text_field"
              }
            },
            {
              "key": "metaobject_reference",
              "name": "Metaobject Reference",
              "type": {
                "name": "metaobject_reference"
              }
            },
            {
              "key": "multi_line",
              "name": "Multi Line",
              "type": {
                "name": "multi_line_text_field"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/228758553",
          "name": "Color",
          "type": "color",
          "fieldDefinitions": [
            {
              "key": "name",
              "name": "Name",
              "type": {
                "name": "single_line_text_field"
              }
            },
            {
              "key": "hex",
              "name": "Hex code",
              "type": {
                "name": "color"
              }
            },
            {
              "key": "secondary_hex",
              "name": "Secondary Hex code",
              "type": {
                "name": "color"
              }
            },
            {
              "key": "accent_color",
              "name": "Accent color",
              "type": {
                "name": "metaobject_reference"
              }
            },
            {
              "key": "related_colors",
              "name": "Related colors",
              "type": {
                "name": "list.metaobject_reference"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/337730630",
          "name": "Hidden",
          "type": "try-to-find-me",
          "fieldDefinitions": []
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/424971887",
          "name": "Merchant Read",
          "type": "merchant_read",
          "fieldDefinitions": []
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/578408816",
          "name": "LookBook",
          "type": "lookbook",
          "fieldDefinitions": [
            {
              "key": "another_lookbook",
              "name": "Another Lookbook",
              "type": {
                "name": "metaobject_reference"
              }
            },
            {
              "key": "season",
              "name": "Season",
              "type": {
                "name": "single_line_text_field"
              }
            },
            {
              "key": "year",
              "name": "Year",
              "type": {
                "name": "number_integer"
              }
            },
            {
              "key": "cover_image",
              "name": "Season",
              "type": {
                "name": "file_reference"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/635137810",
          "name": "Material",
          "type": "product_taxonomy_material",
          "fieldDefinitions": [
            {
              "key": "label",
              "name": "Label",
              "type": {
                "name": "single_line_text_field"
              }
            },
            {
              "key": "taxonomy_reference",
              "name": "Base material",
              "type": {
                "name": "product_taxonomy_value_reference"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/649973242",
          "name": "Testimonial",
          "type": "testimonial",
          "fieldDefinitions": [
            {
              "key": "description",
              "name": "Description",
              "type": {
                "name": "single_line_text_field"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/678745082",
          "name": "Mixed Media",
          "type": "mixed_media",
          "fieldDefinitions": [
            {
              "key": "field_1_file_list",
              "name": "Field 1: file list",
              "type": {
                "name": "list.file_reference"
              }
            },
            {
              "key": "field_2_file",
              "name": "Field 2: file",
              "type": {
                "name": "file_reference"
              }
            },
            {
              "key": "field_3_color_list",
              "name": "Field 3: color list",
              "type": {
                "name": "list.color"
              }
            },
            {
              "key": "field_4_color",
              "name": "Field 4: color",
              "type": {
                "name": "color"
              }
            },
            {
              "key": "field_5_media_list",
              "name": "Field 5: media list",
              "type": {
                "name": "list.file_reference"
              }
            },
            {
              "key": "field_6_media",
              "name": "Field 6: media",
              "type": {
                "name": "file_reference"
              }
            },
            {
              "key": "field_7_image_list",
              "name": "Field 7: image list",
              "type": {
                "name": "list.file_reference"
              }
            },
            {
              "key": "field_8_image",
              "name": "Field 8: image",
              "type": {
                "name": "file_reference"
              }
            },
            {
              "key": "field_9_image",
              "name": "Field 9: image",
              "type": {
                "name": "file_reference"
              }
            },
            {
              "key": "field_10_integer",
              "name": "Field 10: integer",
              "type": {
                "name": "number_integer"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/708399971",
          "name": "Author",
          "type": "author",
          "fieldDefinitions": [
            {
              "key": "pen_names",
              "name": "Pen Names",
              "type": {
                "name": "list.single_line_text_field"
              }
            },
            {
              "key": "birth_date",
              "name": "Birthdate",
              "type": {
                "name": "date"
              }
            },
            {
              "key": "name",
              "name": "Name",
              "type": {
                "name": "single_line_text_field"
              }
            }
          ]
        },
        {
          "id": "gid://shopify/MetaobjectDefinition/710763513",
          "name": "Swatch",
          "type": "swatch",
          "fieldDefinitions": [
            {
              "key": "name",
              "name": "Name",
              "type": {
                "name": "single_line_text_field"
              }
            },
            {
              "key": "color",
              "name": "Color Hex",
              "type": {
                "name": "color"
              }
            },
            {
              "key": "image",
              "name": "Swatch Image",
              "type": {
                "name": "file_reference"
              }
            }
          ]
        }
      ]
    }
  }
  ```
