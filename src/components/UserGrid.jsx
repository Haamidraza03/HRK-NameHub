import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function UserGrid({ users, onSelect }) {
  return (
    <div className='row justify-content-center p-4 text-center align-items-center'>
      {users.map(u => (
        <div key={u.id} className="mb-4 d-flex justify-content-between px-4 py-1 bg-black shadow-lg border border-info p-0 col-md-8 rounded-4 text-center align-items-center" data-aos="fade-up" data-aos-duration="1300" data-aos-easing="ease-in-out">
          <div className="d-flex align-items-center p-0">
            <img 
              className='img-fluid top ms-0 p-2 rounded-circle'
              width={75}
              src={u.avatar_url}
              style={{ borderRadius: '50%', margin: '20px auto 0' }}
            />
            <h4 className='align-items-center mt-4' id='unameofgrid'>{u.login}</h4>
          </div>

          <div className="">
              <button
                id='btngrid'
                className='btn btn-outline-light px-5 rounded-4 fs-4 py-2'
                onClick={() => onSelect(u.login)}
              >
                View Profile
              </button>
          </div>
        </div>
      ))}
    </div>
  );
}
