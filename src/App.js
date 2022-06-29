import React from 'react'
import './App.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { BrowserDataProvider } from "./browser-data-context"
import { MediaPlayerProvider } from "./media-player-context"
import BibleviewerApp from './components/bible-viewer-app'
import MediaPlayer from './components/media-player'

const App = () => {
  return (
    <I18nextProvider i18n={ i18n }>
      <BrowserDataProvider>
        <MediaPlayerProvider>
          <div>
            <BibleviewerApp/>
            <MediaPlayer/>
          </div>
        </MediaPlayerProvider>
      </BrowserDataProvider>
    </I18nextProvider>
  )
}

export default App
