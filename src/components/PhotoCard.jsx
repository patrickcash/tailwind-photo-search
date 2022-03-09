import React from 'react'

export default function PhotoCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://source.unsplash.com/random" alt="" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-gray-500 text-xl mb-2">
                Photo by John Smith
            </div>
            <ul>
                <li>
                    <strong>Views: </strong>
                    4000
                </li>
                <li>
                    <strong>Downloads: </strong>
                    40
                </li>
                <li>
                    <strong>Likes: </strong>
                    400
                </li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">#tag</span>
        </div>
    </div>
  )
}
