import parse from 'html-react-parser';


const Task = ({ index, pregunta }) => {
    const { texto, tiempo, respuesta } = pregunta;
    const parseText = (texto) => {
        return parse(texto.replace(/\n/g, "<br />"));
    }
    return (
        <>
            <div className=' me-2'>
                <div className='ps-2  '>
                    <p className='h5 pb-2'>Tarea {index}: </p>
                    <div className='pb-3'>
                        {texto.split('\\n').map((item, key) => {
                            return <span className='h6' key={key}>{item}<br /></span>
                        })}
                    </div>

                    <p className='pt-2'>Respuesta: {respuesta}</p>
                    <p style={{color:'#e8aa14'}} className='fw-bold'>Duración de la tarea: {tiempo}</p>
                </div>

            </div>
            <hr className="border border-light border-3 opacity-75" />
        </>

    )
}

export default Task