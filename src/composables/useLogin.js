import { ref } from '@vue/reactivity';
import { projectAuth } from '../firebase/config';

const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res);
        return res
    }
    catch(err) {
        error.value = "You must be an Admin to log in."
        setTimeout(() => (error.value = false), 3000);
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin;