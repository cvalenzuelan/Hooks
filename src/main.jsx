import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './assets/HooksApp.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HooksApp />
	</StrictMode>,
)
