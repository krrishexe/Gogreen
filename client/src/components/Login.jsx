import React from 'react'


function Login() {
    return (
        <>
            <div style={{ backgroundColor: '#56a156', height: '100vh' }}>
                <div style={{ backgroundColor: '#131234',height: '100vh' }} className="h-screen w-screen d-flex flex-column justify-content-center gap-1 align-items-center">
                    <form style={{ backgroundColor: '#00000076' }} className="d-flex flex-column gap-8 rounded-3xl px-4 py-3" onSubmit="{handleSubmit}">
                        <div className="rounded-lg brand d-flex items-center gap-4 justify-center">
                            <img className="h-10" src="{logo}" alt />
                            <h1 className="text-white text-uppercase">Buzz</h1>
                        </div>
                        <input className="bg-transparent p-2 border-2 rounded-md border-primary text-white w-100 text-base focus-border-secondary focus-outline-none" name="username" type="text" placeholder="Username" defaultValue="{values.username}" onBlur="{handleBlur}" onChange="{handleChange}" minLength={3} />
                        <input className="bg-transparent p-2 border-2 rounded-md border-primary text-white w-100 text-base focus-border-secondary focus-outline-none" name="password" type="password" placeholder="Enter password" onBlur="{handleBlur}" defaultValue="{values.password}" onChange="{handleChange}" />
                        <div className="button-container">
                            <div className="dog">
                                <div className="tail" />
                                <div className="body" />
                                <div className="head">
                                    <div className="eyes">
                                        <div className="left" />
                                        <div className="right" />
                                    </div>
                                    <div className="nuzzle">
                                        <div className="mouth">
                                            <div className="tongue" />
                                        </div>
                                        <div className="nose">
                                            <div className="nostrils" />
                                            <div className="highlight" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ears">
                                    <div className="left" />
                                    <div className="right" />
                                </div>
                            </div>
                            <button className="text-white w-100 bg-violet-500 px-4 py-2 border-none font-bold text-base cursor-pointer rounded-sm text-uppercase hover-bg-violet-400 transition-colors duration-200" type="submit" onClick="{handleOnClick}">Login</button>
                            <div className="paw" />
                            <div className="paw top" />
                        </div>
                        <p className="text-white text-base mx-auto -my-5">OR</p>
                        <div className="button-container">
                            <div className="dog">
                                <div className="tail" />
                                <div className="body" />
                                <div className="head">
                                    <div className="eyes">
                                        <div className="left" />
                                        <div className="right" />
                                    </div>
                                    <div className="nuzzle">
                                        <div className="mouth">
                                            <div className="tongue" />
                                        </div>
                                        <div className="nose">
                                            <div className="nostrils" />
                                            <div className="highlight" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ears">
                                    <div className="left" />
                                    <div className="right" />
                                </div>
                            </div>
                            <button className="text-white w-100 bg-violet-500 px-4 py-2 border-none font-bold text-base cursor-pointer rounded-sm text-uppercase hover-bg-violet-400 transition-colors duration-200" type="submit">
                                <a href="/video" className="text-white text-decoration-none">Join Videochat</a>
                            </button>
                            <div className="paw" />
                            <div className="paw top" />
                        </div>
                        <span className="text-white text-uppercase">Don't have an account? <a className="text-violet-700 font-bold text-decoration-none" href="/register">Register</a></span>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Login
