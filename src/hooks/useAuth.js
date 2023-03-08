import { useSelector } from 'react-redux';
import {
    selectStatus,
} from '../redux/authorization/authSelectors';


export const useAuth = () => {
    const isLoggedIn = useSelector(selectStatus);
    return {
        isLoggedIn,
    };
};