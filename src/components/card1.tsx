import React from 'react'

const Card1 = () => {
  return (
    <div className="max-w-sm pb-8 overflow-hidden rounded-lg shadow-2xl">
      <img
        className="bg-xl max-h-[300px] w-full object-cover transition-all duration-1000 hover:object-bottom "
        src="https://images.unsplash.com/photo-1663267602456-738c047aefbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="unsplash"
      />
      <div className="px-6 pt-6 text-left">
        <h3 className="mb-4 text-xl font-bold">Title</h3>
        <p className="text-base">
          Minim nulla ad et consequat est labore eu laborum cillum commodo
          veniam ipsum elit culpa. Occaecat eiusmod magna nisi veniam
          exercitation exercitation incididunt voluptate duis. Aliquip est
          veniam magna culpa. Ipsum minim laborum cillum commodo consequat
          adipisicing aliqua esse. Pariatur elit ea officia id. Cupidatat amet
          ullamco velit laborum.
        </p>
      </div>
      <ul className="flex gap-3 px-4 mt-6 mb-2 text-sm font-semibold">
        <li className="px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
          #photography
        </li>
        <li className="px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
          #travel
        </li>
        <li className="px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
          #winter
        </li>
      </ul>
    </div>
  )
}

export {Card1}
