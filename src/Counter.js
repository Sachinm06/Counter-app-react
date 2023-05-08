import React, { useState } from 'react'

function Counter() {

    const [num, setNum] = useState(0)

    function increase() {
        setNum(num + 1)
    }
    function decrease() {
        setNum(num - 1)
    }
    function reset() {
        setNum(0)
    }

    return (

        <div>

            <h3 class="text-white text-center mt-5">COUNTER APP</h3>
            <div class="card">
                <div class="header">
                    <div class="img-box">

                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path fill="rgba(66,193,110,1)" d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path>
                        </svg>
                    </div>
                    <h1 class="title">{num}</h1>
                </div>

                <div class="content">
                    <button class="btn btn-success " onClick={increase}>increase</button>
                    <button class="btn btn-danger ms-3" onClick={decrease}>decrease</button>
                    <button class="btn btn-info ms-3" onClick={reset}>reset</button>
                </div>
            </div>

        </div>

    )
}

export default Counter