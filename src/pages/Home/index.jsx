import ClassList from "../../components/ClassList";
import Headlines from "../../components/Headlines";

const Home = () => {
    return (
        <div className="App">
          <header>
            <h1>Tibia Encyclopedia</h1>
          </header>
          <main>
            <section>
              <h3>Latest News</h3>
              <Headlines />
            </section>
            <div className='listas'>
              <ClassList classList={'creatures'}/>
              <ClassList classList={'worlds'}/>
              <ClassList classList={'spells'}/>
            </div>
          </main>
        </div>
    );
}

export default Home;