import ClassList from "../../components/ClassList";

const Home = () => {
    return (
        <div className="App">
          <h1>Tibia Encyclopedia</h1>
          <div className='listas'>
            <ClassList classList={'creatures'}/>
            <ClassList classList={'worlds'}/>
            <ClassList classList={'spells'}/>
          </div>
        </div>
    );
}

export default Home;