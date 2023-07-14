import { useState } from "react"
function Topic({ cor }) {
    const [texto, setTexto] = useState("Título inicial")
    const [inputText, setInputText] = useState("")

    function clicou() {
        setTexto(inputText)
    }
    return (
        <div>
        <h1 style={{ color: cor }}>{texto}</h1>
            <input value={inputText} onChange={(e) => {
                setInputText(e.target.value)
            }} type="text" />
            <button onClick={clicou}>Mudar</button>
         </div>
        // <div>
        //     <h1 style={{color:cor}}>{title ? title : "Adicione um título"}</h1>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore? Recusandae animi provident inventore omnis eum ullam, dolore necessitatibus voluptatum molestias aliquid, at molestiae cupiditate. Molestiae dignissimos aliquam iusto dicta!</p>
        // </div>

    )
}
export default Topic