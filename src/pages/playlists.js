import React from 'react'
import { Wrapper } from '../assets/Matrix'
import PlaylistVlogs from '../components/PlaylistVlogs'
import PlaylistTunes from '../components/PlaylistTunes'
import PlaylistAssorted from '../components/PlaylistAssorted'

const PlaylistsPage = () => (
  <Wrapper id="videos">
    <PlaylistVlogs />
    <PlaylistTunes />
    <PlaylistAssorted />
  </Wrapper>
)

export default PlaylistsPage
