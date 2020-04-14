import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const getBottomToTopBars = (n, w, h, scale) => {
    const bars = []
    for (var i = 0; i < n; i++) {
        bars.push(<BottomToTopBar w = {w} h = {h} i = {i} n = {n} scale = {scale}/>)
    }
}
const BottomToTopBarContainer = ({n}) => {
    const {scale, start} = useAnimatedScale(0.1 / n, 30)
    const {w, h, resize, disableResizing} = useDimension()
    return (<div onClick = {start}>
            {getBottomToTopBars(n, w, h, scale)}
        </div>)
}

export default BottomToTopBarContainer
