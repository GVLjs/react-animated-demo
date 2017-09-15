/* eslint-disable */
import React from "react"
import Animated from "animated/lib/targets/react-dom"
import Swipeable from "react-swipeable"

let valueX = new Animated.Value(0)
let valueY = new Animated.Value(0)

const xResetAnimation = Animated.spring(valueX, { toValue: 0 })
const yResetAnimation = Animated.spring(valueY, { toValue: 0 })

function animateBack() {
  xResetAnimation.start()
  yResetAnimation.start()
}

export default function Demo() {
  return (
    <Swipeable
      onSwiping={Animated.event([null, valueX, valueY])}
      onSwiped={animateBack}
      trackMouse>
      <div className="center">
        <Animated.div
          className="box"
          style={{
            transform: [
              {
                translateX: valueX.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0px", "-100px"],
                }),
              },
              {
                translateY: valueY.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0px", "-100px"],
                }),
              },
              {
                rotate: valueX.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0deg", "-15deg"],
                }),
              },
            ],
          }}
        />
      </div>
    </Swipeable>
  )
}
