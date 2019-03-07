import { Redirect } from 'react-router-dom';

import React from 'react';

export default function Home() {
  return (
    <div>
    <Redirect to='/cart' />
  </div>
  )
}