import ClassList from "../../components/ClassList";
import Headlines from "../../components/Headlines";
import "./Home.css";

const Home = () => {
    return (
        <div className="App">
          <header className="header">
            <h1>Tibia Encyclopedia</h1>
          </header>
          <main>
            <section>
              <h3>Latest News</h3>
              <Headlines />
            </section>
            <section>
              <h3>Articles</h3>
              <div className='listas'>
                <ClassList classList={'creatures'}/>
                <ClassList classList={'worlds'}/>
                <ClassList classList={'spells'}/>
              </div>
            </section>
          </main>
        </div>
    );
}

export default Home;