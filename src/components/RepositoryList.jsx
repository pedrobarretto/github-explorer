import React, { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>
        Repository List
      </h1>

      <ul>
        {
          repositories.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))
        }
      </ul>
    </section>
  )
};

export default RepositoryList;
