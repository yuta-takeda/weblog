import * as React from 'react';
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <p>Index</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
      <Link href="/todo">
        <p>Todo</p>
      </Link>
    </div>
  )
}
export default Navigation
