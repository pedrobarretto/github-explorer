import React from 'react';

function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Link to Repo</a>
    </li>
  )
}

export default RepositoryItem;