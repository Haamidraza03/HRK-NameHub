import React from 'react';
import { Row, Col, Button, ListGroup, Badge } from 'react-bootstrap';

export default function UserDetail({ data, onBack }) {
  const { profile, repos } = data;
  // Sort repos by stargazers_count desc and take top 10
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10);

  return (
    <>
      <button className='btn btn-outline-light mt-0' onClick={onBack}>&larr; Back to results</button>
      <div className="text-center my-4 row justify-content-evenly align-items-center">
        <div className='col-md-6' data-aos="zoom-in-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <img
            src={profile.avatar_url}
            alt={profile.login}
            style={{ borderRadius: '50%', width: '200px' }}
          />
          <h2 className="mt-2 fw-bold mb-0">
            {profile.name} <a href={profile.html_url} style={{textDecoration:"none"}} className="text-info fs-2">@{profile.login}</a>
          </h2>
          <p className='fs-4'>{profile.bio}</p>
          <p>
            {profile.blog && (
              <a href={`${profile.blog}`} target="_blank" rel="noopener noreferrer" className='btn fw-bold btn-outline-warning m-0 px-5 rounded-5 py-2'>
                Visit Portfolio
              </a>
            )}{' '}
            {profile.twitter_username && (
              <a
                href={`https://x.com/${profile.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className='btn btn-outline-info px-5 m-0 rounded-5 py-2'
              >
                Twitter
              </a>
            )}{' '}
          </p>
          <p className='fs-5 mt-0 mb-0'>Location: {profile.location}</p>
          <div>
            <Badge bg="success" className="mx-2 fs-5 mt-2">
              Followers: {profile.followers}
            </Badge>
            <Badge bg="success" className="mx-2 fs-5 mt-2">
              Following: {profile.following}
            </Badge>
            <Badge bg="success" className="mx-2 fs-5 mt-2">
              Public Repos: {profile.public_repos}
            </Badge>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-easing="ease-in-out">
        <h1 className='mt-3 fw-bold'>Top Repositories</h1>
      <div className="bg-scroll">
        <ListGroup className='shadow'>
        {topRepos.map(r => (
          <ListGroup.Item key={r.id} className='bg-black border border-info shadow mb-3'>
            <a href={r.html_url} target="_blank" rel="noopener noreferrer" className='fw-bold text-light' style={{textDecoration:"none"}}>
              {r.name}
            </a>{' '}
            <Badge bg="dark">{r.stargazers_count} ★</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
      </div>
      </div>
      </div>

      
    </>
  );
}
