import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const userCart = ()=>{
const {user}= useContext(AuthContext)

const { refetch, data : cart=[] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async()=>{
        const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return response.json();
    }
  })



return [cart,refetch]


}

export default userCart; 