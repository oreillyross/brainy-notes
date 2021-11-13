import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query notes {
    note {
      id
      title
      description
      url
    }
  }
`;
export const GET_NOTE = gql`
  query note($_id: uuid = "") {
    note(where: { id: { _eq: $_id } }) {
      title
      description
      url
      id
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($title: String, $description: String, $url: String) {
    insert_note(
      objects: { description: $description, title: $title, url: $url }
    ) {
      returning {
        id
        title
        description
        url
      }
    }
  }
`;