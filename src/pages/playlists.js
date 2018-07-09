import React from 'react'
import { Wrapper } from '../assets/Matrix'
import PlaylistVlogs from '../components/PlaylistVlogs'
import PlaylistTunes from '../components/PlaylistTunes'
import PlaylistVarious from '../components/PlaylistVarious'

const PlaylistsPage = () => (
  <Wrapper id="videos">
    <PlaylistVlogs />
    <PlaylistTunes />
    <PlaylistVarious />
  </Wrapper>
)

export default PlaylistsPage
