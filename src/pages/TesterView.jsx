import { useParams } from "react-router-dom"
import { getById } from "../helpers/db";
import VideoSection from "../components/VideoSection";
import TaskList from "../components/Tasks/TaskList";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";

const TesterView = () => {
  const { id } = useParams();
  /**
   * Obtengo el id de los params y lo casteo a numero
   */
  const castId = id.split('-')[1];
  const tester = getById((Number(castId - 1)));
  /**
   * Mensaje si la ruta indicada no tiene valores
   */
  if (!tester) {
    return (
      <div className="text-white container h-100" >
        No existe ningun tester.
        <BackButton />
      </div >
    )

  }
  const { cliente, linkVideo, transcripcion, escenario, preguntas } = tester;

  return (
    <Layout>
      <div className="text-white" >
        <BackButton className="btn btn-outline-light my-2" />
        <h1 className="pt-3">
          Nombre del cliente: {cliente}
        </h1>
        <h2 className="pb-2">
          Testeador: {castId}
        </h2>
        <VideoSection transcripcion={transcripcion} linkVideo={linkVideo} />
        <TaskList escenario={escenario} preguntas={preguntas} />
      </div >
    </Layout>
  )
}

export default TesterView