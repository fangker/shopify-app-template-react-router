---
title: disputeEvidenceUpdate - GraphQL Admin
description: |-
  Updates the evidence package for a Shopify Payments dispute. Merchants submit
  evidence — such as shipping confirmations, customer communications, and refund
  policies — to contest a dispute filed by a cardholder. This mutation updates
  the evidence fields.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# dispute​Evidence​Update

mutation

Requires `write_shopify_payments_dispute_evidences` access scope. Also: The user must have `manage_orders_information` permission or the `manage_disputes` permission.

Updates the evidence package for a Shopify Payments dispute. Merchants submit evidence — such as shipping confirmations, customer communications, and refund policies — to contest a dispute filed by a cardholder. This mutation updates the evidence fields.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the dispute evidence to be updated.

* input

  [Shopify​Payments​Dispute​Evidence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput)

  required

  The updated properties for a dispute evidence.

***

## Dispute​Evidence​Update​Payload returns

* dispute​Evidence

  [Shopify​Payments​Dispute​Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

  The updated dispute evidence.

* user​Errors

  [\[Dispute​Evidence​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a dispute evidence file

  #### Query

  ```graphql
  mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
        }
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
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) { disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) { disputeEvidence { disputeFileUploads { id } dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
      "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
    mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
    mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
        disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
          disputeEvidence {
            disputeFileUploads {
              id
            }
            dispute {
              amount {
                amount
                currencyCode
              }
              evidenceDueBy
              evidenceSentOn
              finalizedOn
              id
              initiatedAt
              reasonDetails {
                reason
                networkReasonCode
              }
              status
              type
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
        }
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
          disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
            disputeEvidence {
              disputeFileUploads {
                id
              }
              dispute {
                amount {
                  amount
                  currencyCode
                }
                evidenceDueBy
                evidenceSentOn
                finalizedOn
                id
                initiatedAt
                reasonDetails {
                  reason
                  networkReasonCode
                }
                status
                type
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "disputeEvidenceUpdate": {
      "disputeEvidence": {
        "disputeFileUploads": [],
        "dispute": {
          "amount": {
            "amount": "11.5",
            "currencyCode": "USD"
          },
          "evidenceDueBy": "2024-11-20T19:00:00-05:00",
          "evidenceSentOn": null,
          "finalizedOn": null,
          "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
          "initiatedAt": "2013-05-04T00:00:00Z",
          "reasonDetails": {
            "reason": "FRAUDULENT",
            "networkReasonCode": "4827"
          },
          "status": "NEEDS_RESPONSE",
          "type": "CHARGEBACK"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Updates dispute evidence

  #### Query

  ```graphql
  mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
    disputeEvidenceUpdate(id: $id, input: $input) {
      disputeEvidence {
        uncategorizedText
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
        }
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
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "input": {
      "customerFirstName": "Kermit",
      "customerLastName": "The frog",
      "customerEmailAddress": "kermit@example.com",
      "shippingAddress": {
        "address1": "1 Infinite Loop",
        "address2": "Muppet Studio",
        "city": "Cupertino",
        "zip": "95014",
        "country": "US",
        "province": "California"
      },
      "uncategorizedText": "Test uncategorized text",
      "accessActivityLog": "Test access activity log",
      "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
      "cancellationRebuttal": "Test cancellation rebuttal",
      "refundPolicyDisclosure": "Test refund policy disclosure",
      "refundRefusalExplanation": "Test refund refusal explanation"
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
  "query": "mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) { disputeEvidenceUpdate(id: $id, input: $input) { disputeEvidence { uncategorizedText dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
      "input": {
        "customerFirstName": "Kermit",
        "customerLastName": "The frog",
        "customerEmailAddress": "kermit@example.com",
        "shippingAddress": {
          "address1": "1 Infinite Loop",
          "address2": "Muppet Studio",
          "city": "Cupertino",
          "zip": "95014",
          "country": "US",
          "province": "California"
        },
        "uncategorizedText": "Test uncategorized text",
        "accessActivityLog": "Test access activity log",
        "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
        "cancellationRebuttal": "Test cancellation rebuttal",
        "refundPolicyDisclosure": "Test refund policy disclosure",
        "refundRefusalExplanation": "Test refund refusal explanation"
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
    mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
      disputeEvidenceUpdate(id: $id, input: $input) {
        disputeEvidence {
          uncategorizedText
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "input": {
              "customerFirstName": "Kermit",
              "customerLastName": "The frog",
              "customerEmailAddress": "kermit@example.com",
              "shippingAddress": {
                  "address1": "1 Infinite Loop",
                  "address2": "Muppet Studio",
                  "city": "Cupertino",
                  "zip": "95014",
                  "country": "US",
                  "province": "California"
              },
              "uncategorizedText": "Test uncategorized text",
              "accessActivityLog": "Test access activity log",
              "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
              "cancellationRebuttal": "Test cancellation rebuttal",
              "refundPolicyDisclosure": "Test refund policy disclosure",
              "refundRefusalExplanation": "Test refund refusal explanation"
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
    mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
      disputeEvidenceUpdate(id: $id, input: $input) {
        disputeEvidence {
          uncategorizedText
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "input": {
      "customerFirstName": "Kermit",
      "customerLastName": "The frog",
      "customerEmailAddress": "kermit@example.com",
      "shippingAddress": {
        "address1": "1 Infinite Loop",
        "address2": "Muppet Studio",
        "city": "Cupertino",
        "zip": "95014",
        "country": "US",
        "province": "California"
      },
      "uncategorizedText": "Test uncategorized text",
      "accessActivityLog": "Test access activity log",
      "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
      "cancellationRebuttal": "Test cancellation rebuttal",
      "refundPolicyDisclosure": "Test refund policy disclosure",
      "refundRefusalExplanation": "Test refund refusal explanation"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
        disputeEvidenceUpdate(id: $id, input: $input) {
          disputeEvidence {
            uncategorizedText
            dispute {
              amount {
                amount
                currencyCode
              }
              evidenceDueBy
              evidenceSentOn
              finalizedOn
              id
              initiatedAt
              reasonDetails {
                reason
                networkReasonCode
              }
              status
              type
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "input": {
              "customerFirstName": "Kermit",
              "customerLastName": "The frog",
              "customerEmailAddress": "kermit@example.com",
              "shippingAddress": {
                  "address1": "1 Infinite Loop",
                  "address2": "Muppet Studio",
                  "city": "Cupertino",
                  "zip": "95014",
                  "country": "US",
                  "province": "California"
              },
              "uncategorizedText": "Test uncategorized text",
              "accessActivityLog": "Test access activity log",
              "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
              "cancellationRebuttal": "Test cancellation rebuttal",
              "refundPolicyDisclosure": "Test refund policy disclosure",
              "refundRefusalExplanation": "Test refund refusal explanation"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
    disputeEvidenceUpdate(id: $id, input: $input) {
      disputeEvidence {
        uncategorizedText
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
        }
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "input": {
      "customerFirstName": "Kermit",
      "customerLastName": "The frog",
      "customerEmailAddress": "kermit@example.com",
      "shippingAddress": {
        "address1": "1 Infinite Loop",
        "address2": "Muppet Studio",
        "city": "Cupertino",
        "zip": "95014",
        "country": "US",
        "province": "California"
      },
      "uncategorizedText": "Test uncategorized text",
      "accessActivityLog": "Test access activity log",
      "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
      "cancellationRebuttal": "Test cancellation rebuttal",
      "refundPolicyDisclosure": "Test refund policy disclosure",
      "refundRefusalExplanation": "Test refund refusal explanation"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
          disputeEvidenceUpdate(id: $id, input: $input) {
            disputeEvidence {
              uncategorizedText
              dispute {
                amount {
                  amount
                  currencyCode
                }
                evidenceDueBy
                evidenceSentOn
                finalizedOn
                id
                initiatedAt
                reasonDetails {
                  reason
                  networkReasonCode
                }
                status
                type
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "input": {
              "customerFirstName": "Kermit",
              "customerLastName": "The frog",
              "customerEmailAddress": "kermit@example.com",
              "shippingAddress": {
                  "address1": "1 Infinite Loop",
                  "address2": "Muppet Studio",
                  "city": "Cupertino",
                  "zip": "95014",
                  "country": "US",
                  "province": "California"
              },
              "uncategorizedText": "Test uncategorized text",
              "accessActivityLog": "Test access activity log",
              "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
              "cancellationRebuttal": "Test cancellation rebuttal",
              "refundPolicyDisclosure": "Test refund policy disclosure",
              "refundRefusalExplanation": "Test refund refusal explanation"
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
    "disputeEvidenceUpdate": {
      "disputeEvidence": {
        "uncategorizedText": "Test uncategorized text",
        "dispute": {
          "amount": {
            "amount": "11.5",
            "currencyCode": "USD"
          },
          "evidenceDueBy": "2024-11-20T19:00:00-05:00",
          "evidenceSentOn": null,
          "finalizedOn": null,
          "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
          "initiatedAt": "2013-05-04T00:00:00Z",
          "reasonDetails": {
            "reason": "FRAUDULENT",
            "networkReasonCode": "4827"
          },
          "status": "NEEDS_RESPONSE",
          "type": "CHARGEBACK"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Upload a file to a dispute

  #### Query

  ```graphql
  mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
        }
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
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) { disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) { disputeEvidence { disputeFileUploads { id } dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
      "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
    mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
    mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
        disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
          disputeEvidence {
            disputeFileUploads {
              id
            }
            dispute {
              amount {
                amount
                currencyCode
              }
              evidenceDueBy
              evidenceSentOn
              finalizedOn
              id
              initiatedAt
              reasonDetails {
                reason
                networkReasonCode
              }
              status
              type
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
        }
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
          disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
            disputeEvidence {
              disputeFileUploads {
                id
              }
              dispute {
                amount {
                  amount
                  currencyCode
                }
                evidenceDueBy
                evidenceSentOn
                finalizedOn
                id
                initiatedAt
                reasonDetails {
                  reason
                  networkReasonCode
                }
                status
                type
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
          "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "disputeEvidenceUpdate": {
      "disputeEvidence": {
        "disputeFileUploads": [
          {
            "id": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
          }
        ],
        "dispute": {
          "amount": {
            "amount": "11.5",
            "currencyCode": "USD"
          },
          "evidenceDueBy": "2024-11-20T19:00:00-05:00",
          "evidenceSentOn": null,
          "finalizedOn": null,
          "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
          "initiatedAt": "2013-05-04T00:00:00Z",
          "reasonDetails": {
            "reason": "FRAUDULENT",
            "networkReasonCode": "4827"
          },
          "status": "NEEDS_RESPONSE",
          "type": "CHARGEBACK"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### disputeEvidenceUpdate reference
