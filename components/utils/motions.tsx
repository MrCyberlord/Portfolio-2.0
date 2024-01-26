export function slideInFromLeft(directionLeft: boolean, delay: number) {
    return {
        hidden: {x: directionLeft, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        }
    }
}

export function slideInFromRight(delay: number) {
    return {
        hidden: {x: 500, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        }
    }
}

export function slideInFromTop(delay: number) {
    return {
        hidden: {y: -100, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        }
    }
}