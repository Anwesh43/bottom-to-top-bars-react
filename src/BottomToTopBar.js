import React from 'react'
import {divideScale, sinify} from './util'

const btnHFactor = 0.2

const offsetFactor = 0.1
const totalSizeFactor = 0.8

const bottomToTopBarStyle = (gap, offsetX, h, scale, i) => {
    const sc1 = divideScale(scale, 0, 2)
    const sc2 = divideScale(scale, 1, 2)
    const y = h * (1 - btnHFactor) * (1 - sc1)
    const left = `${offsetX + gap * i}px`
    const top = `${y}px`
    const position = 'absolute'
    const width = `${gap}px`
    const barH = btnHFactor * h + (1 - btnHFactor) * h * (sc1 - sc2)
    const height = `${barH}px`
    const background = '#3F51B5'
    return {position, top, left, width, height, background}

}

const BottomToTopBar = ({w, h, i, n, scale}) => {
    const sc = divideScale(sinify(scale), i, n)
    const gap = totalSizeFactor * w / n
    const offsetX = offsetFactor * w
    return <div style = {bottomToTopBarStyle(gap, offsetX, h, sc, i)}></div>
}

export default BottomToTopBar
