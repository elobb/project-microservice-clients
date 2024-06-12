"use client";

import { DocumentNode, gql } from "@apollo/client";

export const REGISTER_USER: DocumentNode = gql`
  mutation register(
    $name: String!
    $email: String!
    $password: String!
    $phone_number: Float!
  ) {
    register(
      registerDto: {
        name: $name
        email: $email
        password: $password
        phone_number: $phone_number
      }
    ) {
      activation_token
      message
    }
  }
`;
export const ACTIVATE_USER: DocumentNode = gql`
  mutation activateUser($activationToken: String!, $activationCode: String!) {
    activateUser(
      activationDto: {
        activationToken: $activationToken
        activationCode: $activationCode
      }
    ) {
      user {
        email
      }
    }
  }
`;
