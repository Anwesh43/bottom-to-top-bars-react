import React, {useEffect} from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BottomToTopBar from './BottomToTopBar'
const getBottomToTopBars = (n, w, h, scale) => {
    const bars = []
    for (let i = 0; i < n; i++) {
        bars.push(<BottomToTopBar w = {w} h = {h} i = {i} n = {n} scale = {scale}/>)
    }
    return bars
}
const BottomToTopBarContainer = ({n}) => {
    const {scale, start} = useAnimatedScale(0.02 / n, 30)
    const {w, h, resize, disableResizing} = useDimension()
    useEffect(() => {
        resize()
        return disableResizing
    })
    return (<div onClick = {start}>
            {getBottomToTopBars(n, w, h, scale)}
        </div>)
}

export default BottomToTopBarContainer
