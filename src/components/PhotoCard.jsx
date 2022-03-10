import React from 'react'

export default function PhotoCard({photo}) {
  const tags = photo.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={photo.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-gray-500 text-xl mb-2">
                Photo by {photo.user}
            </div>
            <ul>
                <li>
                    <strong>Views: </strong>
                    {photo.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {photo.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {photo.likes}
                </li>
            </ul>
        </div>
        <div className="px-6 py-4">
            {tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">#{tag.trim()} </span>
            ))}            
        </div>
    </div>
  )
}
