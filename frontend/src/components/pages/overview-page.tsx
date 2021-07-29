import { useSelector } from 'react-redux';
import AppNavbar from '../navigation/app-navbar';
import Sidebar from '../navigation/sidebar/sidebar';

const OverviewPage: React.FunctionComponent = () => {
  const user = useSelector((s: Store.AppStore) => s.auth.user);
  
  return (
    <>
      <AppNavbar />
      {/* <Sidebar /> */}
      <h1>Welcome to the dashboard!</h1>
      {!user && <strong>No user :(</strong>}
      {user && <strong>{JSON.stringify(user)}</strong>}
    </>
  );
}
 
export default OverviewPage;