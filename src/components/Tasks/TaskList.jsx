import React from 'react'
import Task from './Task'

const TaskList = ({ escenario, preguntas }) => {
    return (
        <section id="preguntas">
            <div className='h3 py-3' >Tareas</div>
            <p>Escenario: {escenario}</p>
            <hr className="border border-light border-3 opacity-75" />
            {preguntas.map((pregunta, index) => (
                <Task key={index} index={index + 1} pregunta={pregunta} />
            )
            )
            }

        </section>
    )
}

export default TaskList