---
title: metaobjectDefinition - GraphQL Admin
description: >-
  Retrieves a
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)
  by its global ID. Metaobject definitions provide the structure and fields for
  metaobjects.


  The definition includes field configurations, access settings, display

  preferences, and capabilities that determine how
  [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  of this type behave across the Shopify platform.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinition.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# metaobject​Definition

query

Requires `read_metaobject_definitions` access scope.

Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its global ID. Metaobject definitions provide the structure and fields for metaobjects.

The definition includes field configurations, access settings, display preferences, and capabilities that determine how [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) of this type behave across the Shopify platform.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the metaobject to return.

***

## Possible returns

* Metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  Defines the structure and configuration for a custom data type in Shopify. Each definition specifies the fields, validation rules, and capabilities that apply to all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries created from it.

  The definition includes field definitions that determine what data to store, access controls for [the Shopify admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions) and [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions) APIs, and capabilities such as publishability and translatability. You can track which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) created the definition and optionally base it on a [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).

  * access

    [Metaobject​Access!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess)

    non-null

    Access configuration for the metaobject definition.

  * capabilities

    [Metaobject​Capabilities!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilities)

    non-null

    The capabilities of the metaobject definition.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the metaobject definition was created.

  * created​By​App

    [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    non-null

    The app used to create the metaobject definition.

  * created​By​Staff

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    The staff member who created the metaobject definition.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The administrative description.

  * display​Name​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of a field to reference as the display name for each object.

  * field​Definitions

    [\[Metaobject​Field​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition)

    non-null

    The fields defined for this object type.

  * has​Thumbnail​Field

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether this metaobject definition has field whose type can visually represent a metaobject with the `thumbnailField`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * metaobjects

    [Metaobject​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection)

    non-null

    A paginated connection to the metaobjects associated with the definition.

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

  * metaobjects​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The count of metaobjects created for the definition.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The human-readable name.

  * standard​Template

    [Standard​Metaobject​Definition​Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate)

    The standard metaobject template associated with the definition.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The type of the object definition. Defines the namespace of associated metafields.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the metaobject definition was last updated.

***

## Examples

* ### Fetch a metaobject definition by ID

  #### Description

  Retrieves a metaobject definition by its global ID. Shows field definitions, access controls, and capabilities.

  #### Query

  ```graphql
  query MetaobjectDefinition($id: ID!) {
    metaobjectDefinition(id: $id) {
      id
      name
      type
      description
      fieldDefinitions {
        key
        name
        type {
          name
        }
        required
        validations {
          name
          value
        }
      }
      access {
        admin
        storefront
      }
      capabilities {
        publishable {
          enabled
        }
        translatable {
          enabled
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/MetaobjectDefinition/945883214"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query MetaobjectDefinition($id: ID!) { metaobjectDefinition(id: $id) { id name type description fieldDefinitions { key name type { name } required validations { name value } } access { admin storefront } capabilities { publishable { enabled } translatable { enabled } } } }",
   "variables": {
      "id": "gid://shopify/MetaobjectDefinition/945883214"
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
    query MetaobjectDefinition($id: ID!) {
      metaobjectDefinition(id: $id) {
        id
        name
        type
        description
        fieldDefinitions {
          key
          name
          type {
            name
          }
          required
          validations {
            name
            value
          }
        }
        access {
          admin
          storefront
        }
        capabilities {
          publishable {
            enabled
          }
          translatable {
            enabled
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MetaobjectDefinition/945883214"
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
    query MetaobjectDefinition($id: ID!) {
      metaobjectDefinition(id: $id) {
        id
        name
        type
        description
        fieldDefinitions {
          key
          name
          type {
            name
          }
          required
          validations {
            name
            value
          }
        }
        access {
          admin
          storefront
        }
        capabilities {
          publishable {
            enabled
          }
          translatable {
            enabled
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MetaobjectDefinition/945883214"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query MetaobjectDefinition($id: ID!) {
        metaobjectDefinition(id: $id) {
          id
          name
          type
          description
          fieldDefinitions {
            key
            name
            type {
              name
            }
            required
            validations {
              name
              value
            }
          }
          access {
            admin
            storefront
          }
          capabilities {
            publishable {
              enabled
            }
            translatable {
              enabled
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/MetaobjectDefinition/945883214"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query MetaobjectDefinition($id: ID!) {
    metaobjectDefinition(id: $id) {
      id
      name
      type
      description
      fieldDefinitions {
        key
        name
        type {
          name
        }
        required
        validations {
          name
          value
        }
      }
      access {
        admin
        storefront
      }
      capabilities {
        publishable {
          enabled
        }
        translatable {
          enabled
        }
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/MetaobjectDefinition/945883214"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query MetaobjectDefinition($id: ID!) {
          metaobjectDefinition(id: $id) {
            id
            name
            type
            description
            fieldDefinitions {
              key
              name
              type {
                name
              }
              required
              validations {
                name
                value
              }
            }
            access {
              admin
              storefront
            }
            capabilities {
              publishable {
                enabled
              }
              translatable {
                enabled
              }
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/MetaobjectDefinition/945883214"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "metaobjectDefinition": {
      "id": "gid://shopify/MetaobjectDefinition/945883214",
      "name": "Author",
      "type": "app--2459039--author",
      "description": "Represents an author of content",
      "fieldDefinitions": [
        {
          "key": "full_name",
          "name": "Full Name",
          "type": {
            "name": "single_line_text_field"
          },
          "required": true,
          "validations": []
        },
        {
          "key": "first_published",
          "name": "First Published",
          "type": {
            "name": "date"
          },
          "required": false,
          "validations": []
        }
      ],
      "access": {
        "admin": "MERCHANT_READ",
        "storefront": "NONE"
      },
      "capabilities": {
        "publishable": {
          "enabled": true
        },
        "translatable": {
          "enabled": true
        }
      }
    }
  }
  ```
