/* eslint-disable import/no-extraneous-dependencies */
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { CardShapeTool } from './components/CardShape/CardShapeTool'
import { CardShapeUtil } from './components/CardShape/CardShapeUtil'
import { uiOverrides } from './ui-overrides'

const customShapeUtils = [CardShapeUtil]
const customTools = [CardShapeTool]
export default function CustomConfigExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw
				// Pass in the array of custom shape classes
				shapeUtils={customShapeUtils}
				// Pass in the array of custom tool classes
				tools={customTools}
				// Pass in any overrides to the user interface
				overrides={uiOverrides}
			/>
		</div>
	)
}