import React, {useState} from 'react'

export default function SearchBox({searchText}) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                <input onChange={e => setText(e.target.value)} type="text" placeholder="Search..." className="appearance-none gb-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-right focus:outline-none" />
                <button type="submit" className="flex-shrink-0 bg-blue-500 hover:bd-blue-500 border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
            </div>
        </form>
    </div>
  )
}
