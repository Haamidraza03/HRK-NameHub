import React from 'react';

export default function SearchBar({ query, onChange, onSearch }) {
  return (
    <center data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" id='searchbar'>
        <div className="mb-0 mt-5">
      <div className='text-center row justify-content-center'>
            <div className='d-flex col-md-7'>
            <input
            placeholder="Enter full name (e.g. Jane Doe)"
            className='w-100 p-2 px-3 border rounded rounded-end-0 form-control'
            value={query}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onSearch()}
          />
          <button className='btn btn-outline-info px-3 d-flex fs-5 rounded-start-0' onClick={onSearch}><span><i className='bi bi-search me-2'></i></span>Search</button>
          
        </div>
        
        
      </div>
    </div>
    </center>
  );
}
