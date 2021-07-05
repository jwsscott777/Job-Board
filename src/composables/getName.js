import { ref } from "@vue/reactivity";
import { projectFireStore } from "../firebase/config";

const getName = (id) => {
  const student = ref(null);
  const error = ref(null);

  const loadName = async () => {
    try {
      let res = await projectFireStore
        .collection("students")
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error("That does not exist");
      }

      student.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { student, error, loadName };
};
export default getName;