import DashboardApp from './DashboardApp';
import Navbar from './Navbar';
import './App.css';
import Jss from './Jss';
function Dashboard() {
    return (
      <div className="dashboard">
        <div>
         <Navbar />
         <DashboardApp/>
         <Jss/>  
         
        </div>
      </div>
    );
  }
  
  export default Dashboard;