import { ref } from "@vue/reactivity";
import { projectFireStore } from "../firebase/config";

const getNames = () => {
  const students = ref([]);
  const error = ref(null);

  const loadNames = async () => {
    try {
      const res = await projectFireStore
        .collection("students")
        .orderBy("createdAt")
        .get();

      students.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { students, error, loadNames };
};
export default getNames;