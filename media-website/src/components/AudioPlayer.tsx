// components/AudioPlayer.tsx
'use client'

import { useRef, useState } from 'react'

const playlist = [
  { title: 'Song 1', src: '/music/song1.mp3' },
  { title: 'Song 2', src: '/music/song2.mp3' },
  { title: 'Song 3', src: '/music/song3.mp3' },
]

export default function AudioPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnded = () => {
    const nextIndex = (currentIndex + 1) % playlist.length
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl mb-2">{playlist[currentIndex].title}</h2>
      <audio
        controls
        ref={audioRef}
        src={playlist[currentIndex].src}
        onEnded={handleEnded}
      />
    </div>
  )
}
