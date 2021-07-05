<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Job ID</label>
      <input v-model="jobId" type="number" required>
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>Job Description:</label>
      <textarea v-model="description" required></textarea>
      <label>Salary:</label>
      <input v-model="salary" type="text" required>
      <label>Type</label>
      <input v-model="type" type="text" required>
      <label>Location:</label>
      <input v-model="location" type="text" required>
      <label>Post Date:</label>
      <input v-model="postDate" type="text" required>
      <label>Expires:</label>
      <input v-model="expire" type="text" required>
      <label>Company:</label>
      <input v-model="company" type="text" required>
      <label>Contact:</label>
      <input v-model="contact" type="text" required>
      <label>Phone</label>
      <input v-model="phone" type="text" required>
      <button>Add Job</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import { projectFireStore, timestamp } from '../firebase/config';
export default {
  setup() {
    const jobId = ref('')
    const title = ref('')
    const description = ref('')
    const salary = ref('')
    const type = ref('')
    const location = ref('')
    const postDate = ref('')
    const expire = ref('')
    const company = ref('')
    const contact = ref('')
    const phone = ref('')

    const router = useRouter();

    const handleSubmit = async () => {
      const job = {
        jobId: jobId.value,
        title: title.value,
        description: description.value,
        salary: salary.value,
        type: type.value,
        location: location.value,
        postDate: postDate.value,
        expire: expire.value,
        company: company.value,
        contact: contact.value,
        phone: phone.value,
        createdAt: timestamp()
      }
      const res = await projectFireStore.collection("jobs").add(job);
     // console.log(res);

      router.push({ name: "JobList"});
    }

    return {
      jobId, title, description, salary, type, location,
      postDate, expire, company, contact, phone, handleSubmit
    }
  }
}
</script>

<style>
  form {
    padding: 20px;
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgb(167, 163, 163);
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: rgb(14, 10, 10);
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #1eff00;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -20px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #0051ff;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
