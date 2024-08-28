import './App.css';
import IdCard from './idCard.js';
import Greetings from './Greetings.js';
function App() {
  return (
    <>
      <div className = "idCard">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        
        <Greetings lang="de" >
          
      </Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Peter</Greetings>
      <Greetings lang="es">Luka</Greetings>
      <Greetings lang="fi">Timo</Greetings>
      </div>
    </>
  );
}

export default App;
