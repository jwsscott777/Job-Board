import { ref } from '@vue/reactivity';
import { projectFireStore } from '../firebase/config';

const getJobs = () => {
    const jobs = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        const res = await projectFireStore.collection('jobs')
        .orderBy("createdAt", "desc")
        .get()
        jobs.value = res.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
      }
      catch(err) {
        error.value = err.message;
      }
    }
    return { jobs, error, load }
}
export default getJobs;

// let data = await fetch("http://localhost:3000/jobs")
//         if (!data.ok) {
//           throw Error("no data available")
//         }
//         jobs.value = await data.json()