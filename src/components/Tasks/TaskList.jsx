import { useState } from 'react'
import Pagination from './Pagination';
import Task from './Task'

const TaskList = ({ escenario, preguntas }) => {
    /**
     * Implementamos una simple paginacion para mejorar la navegacion por las preguntas
     */
    let offset = 5;
    const [inicio, setInicio] = useState(0);
    const [fin, setFin] = useState(offset);
    let pregunstasObj = [];
    preguntas.map((preg, index) => pregunstasObj.push({ id: index, texto: preg }));
    let preguntasPage = pregunstasObj.slice(inicio, fin);
    const next = () => {
        setInicio(inicio + offset);
        setFin(fin + offset);
    }
    const prev = () => {
        setInicio(inicio - offset);
        setFin(fin - offset);
    }
    return (
        <section id="preguntas">
            <div className='h3 py-3' >Tareas</div>
            <p>Escenario: {escenario}</p>
            <hr className="border border-light border-3 opacity-75" />
            <Pagination
                inicio={inicio}
                fin={fin}
                next={next}
                prev={prev}
                pregLength={pregunstasObj.length} />
            <div className="pb-2">
                {
                    preguntasPage.map((pregunta) =>
                    (
                        <Task
                            key={pregunta.id}
                            index={pregunta.id + 1}
                            pregunta={pregunta.texto}
                        />
                    )
                    )
                }
            </div>
            <Pagination
                inicio={inicio}
                fin={fin}
                next={next}
                prev={prev}
                pregLength={pregunstasObj.length} />

        </section>
    )
}

export default TaskList