
const Pagination = ({ inicio, fin, prev, next, pregLength }) => {
    return (
        <div className=' ms-2 d-flex justify-content-between py-3'>
            <button disabled={inicio <= 0} onClick={prev} className='btn btn-outline-light'>Atras</button>
            <button disabled={fin >= pregLength} onClick={next} className='btn btn-outline-light'>Siguiente</button>

        </div>

    )
}

export default Pagination