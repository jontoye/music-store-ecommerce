import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlane, faUser } from '@fortawesome/free-solid-svg-icons';

const TopPanel = () => {
  return (
    <div className='text-xs bg-dark text-light h-9'>
      <div className='flex justify-between max-w-screen-lg px-5 lg:px-0 mx-auto h-full'>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faPlane} color='red' transform={{ rotate: -135 }} />
          <p>Free Shipping On All Orders Over $100</p>
        </div>
        <div className='flex items-center gap-7'>
          <div className='flex justify-between gap-2'>
            <FontAwesomeIcon icon={faUser} color='red' />
            <p>Login</p>
          </div>
          <div className='flex items-center bg-red h-full p-4 gap-2'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>
              <strong>Your cart: </strong>0 Items - $0.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
