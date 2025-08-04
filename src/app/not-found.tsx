"use client"
import Lottie from "lottie-react"
import notFoundAnimation from "../../public/404 Error.json"

export default function NotFound() {

    return (
        <div className="justify-center items-center flex flex-col pt-10">
            <h1 className="text-5xl">Ops! Página Não encontrada.</h1>
            <div className="self-center">
                <Lottie animationData={notFoundAnimation} loop={false} style={{ height: 400}} />
            </div>
        </div>
    )
}