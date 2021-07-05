import { ref } from '@vue/reactivity';
import { projectFireStore } from '../firebase/config';

const getJob = (id) => {
    const job = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
       let res = await projectFireStore.collection("jobs").doc(id).get()

       if (!res.exists) {
         throw Error("That job does not exist")
       }
       job.value = { ...res.data(), id: res.id }
      }
      catch(err) {
        error.value = err.message;
      }
    }
    return { job, error, load }
}
export default getJob;